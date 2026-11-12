import fs from 'fs';
import path from 'path';
import { connectToDatabase } from './mongodb';
import { QuoteModel, IQuote } from '@/models/Quote';
import { ContactModel, IContact } from '@/models/Contact';

// In serverless environments (Vercel), only /tmp is writable
const isServerless = Boolean(process.env.VERCEL);
const DATA_DIR = isServerless ? '/tmp/newtech-data' : path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

// In-memory fallback
let memoryStore: { quotes: any[]; contacts: any[] } = {
  quotes: [],
  contacts: [],
};

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(LEADS_FILE)) {
      fs.writeFileSync(
        LEADS_FILE,
        JSON.stringify(memoryStore, null, 2),
        'utf-8'
      );
    }
  } catch (err: any) {
    console.warn('Filesystem access limited, using in-memory store:', err.message);
  }
}

function getLocalData() {
  ensureDataFile();
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.quotes)) {
        return parsed;
      }
    }
  } catch (err: any) {
    console.warn('Could not read local file, using memory cache:', err.message);
  }
  return memoryStore;
}

function saveLocalData(data: any) {
  memoryStore = data;
  ensureDataFile();
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err: any) {
    console.warn('Could not persist to disk, stored in memory:', err.message);
  }
}

export async function saveQuote(data: {
  name: string;
  phone: string;
  email?: string;
  product: string;
  quantity?: string;
  message: string;
  ip?: string;
}) {
  const localData = getLocalData();
  const newLead = {
    id: 'quote_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    ...data,
    status: 'new',
    createdAt: new Date().toISOString(),
  };

  localData.quotes = [newLead, ...(localData.quotes || [])];
  saveLocalData(localData);

  // Attempt to save to MongoDB
  try {
    const db = await connectToDatabase();
    if (db) {
      await QuoteModel.create(data);
    }
  } catch (err: any) {
    console.warn('MongoDB save fallback to local store:', err.message);
  }

  return newLead;
}

export async function saveContact(data: {
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
  ip?: string;
}) {
  const localData = getLocalData();
  const newContact = {
    id: 'contact_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    ...data,
    status: 'new',
    createdAt: new Date().toISOString(),
  };

  localData.contacts = [newContact, ...(localData.contacts || [])];
  saveLocalData(localData);

  try {
    const db = await connectToDatabase();
    if (db) {
      await ContactModel.create(data);
    }
  } catch (err: any) {
    console.warn('MongoDB save fallback to local store:', err.message);
  }

  return newContact;
}

export async function getAllQuotes() {
  try {
    const db = await connectToDatabase();
    if (db) {
      const mongoQuotes = await QuoteModel.find({}).sort({ createdAt: -1 }).lean();
      if (mongoQuotes && mongoQuotes.length > 0) {
        return mongoQuotes.map((q: any) => ({
          id: q._id.toString(),
          name: q.name,
          phone: q.phone,
          email: q.email,
          product: q.product,
          quantity: q.quantity,
          message: q.message,
          status: q.status || 'new',
          createdAt: q.createdAt ? q.createdAt.toISOString() : new Date().toISOString(),
          ip: q.ip,
        }));
      }
    }
  } catch (err: any) {
    console.warn('Failed to retrieve from MongoDB, using local fallback:', err.message);
  }

  const localData = getLocalData();
  return localData.quotes || [];
}

export async function getAllContacts() {
  try {
    const db = await connectToDatabase();
    if (db) {
      const mongoContacts = await ContactModel.find({}).sort({ createdAt: -1 }).lean();
      if (mongoContacts && mongoContacts.length > 0) {
        return mongoContacts.map((c: any) => ({
          id: c._id.toString(),
          name: c.name,
          phone: c.phone,
          email: c.email,
          subject: c.subject,
          message: c.message,
          status: c.status || 'new',
          createdAt: c.createdAt ? c.createdAt.toISOString() : new Date().toISOString(),
        }));
      }
    }
  } catch (err: any) {
    console.warn('Failed to retrieve contacts from MongoDB, using local fallback:', err.message);
  }

  const localData = getLocalData();
  return localData.contacts || [];
}

export async function updateQuoteStatus(id: string, status: 'new' | 'contacted' | 'closed') {
  try {
    const db = await connectToDatabase();
    if (db) {
      await QuoteModel.findByIdAndUpdate(id, { status });
    }
  } catch (err) {
    console.warn('MongoDB status update skipped');
  }

  const localData = getLocalData();
  localData.quotes = (localData.quotes || []).map((q: any) => {
    if (q.id === id || q._id === id) {
      return { ...q, status };
    }
    return q;
  });
  saveLocalData(localData);
  return true;
}
