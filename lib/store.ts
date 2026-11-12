import fs from 'fs';
import path from 'path';
import { connectToDatabase } from './mongodb';
import { QuoteModel, IQuote } from '@/models/Quote';
import { ContactModel, IContact } from '@/models/Contact';

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(
      LEADS_FILE,
      JSON.stringify({ quotes: [], contacts: [] }, null, 2),
      'utf-8'
    );
  }
}

function getLocalData() {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return { quotes: [], contacts: [] };
  }
}

function saveLocalData(data: any) {
  ensureDataFile();
  fs.writeFileSync(LEADS_FILE, JSON.stringify(data, null, 2), 'utf-8');
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
  localData.quotes.unshift(newLead);
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
  localData.contacts.unshift(newContact);
  saveLocalData(localData);

  // Attempt to save to MongoDB
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
      const quotes = await QuoteModel.find().sort({ createdAt: -1 }).lean();
      if (quotes && quotes.length > 0) {
        return quotes.map((q: any) => ({
          id: q._id.toString(),
          name: q.name,
          phone: q.phone,
          email: q.email,
          product: q.product,
          quantity: q.quantity,
          message: q.message,
          status: q.status,
          createdAt: q.createdAt,
        }));
      }
    }
  } catch (err: any) {
    console.warn('Error reading from MongoDB, falling back to local file:', err.message);
  }

  const localData = getLocalData();
  return localData.quotes || [];
}

export async function getAllContacts() {
  try {
    const db = await connectToDatabase();
    if (db) {
      const contacts = await ContactModel.find().sort({ createdAt: -1 }).lean();
      if (contacts && contacts.length > 0) {
        return contacts.map((c: any) => ({
          id: c._id.toString(),
          name: c.name,
          phone: c.phone,
          email: c.email,
          subject: c.subject,
          message: c.message,
          status: c.status,
          createdAt: c.createdAt,
        }));
      }
    }
  } catch (err: any) {
    console.warn('Error reading contacts from MongoDB:', err.message);
  }

  const localData = getLocalData();
  return localData.contacts || [];
}

export async function updateQuoteStatus(id: string, status: 'new' | 'contacted' | 'closed') {
  const localData = getLocalData();
  const item = localData.quotes.find((q: any) => q.id === id);
  if (item) {
    item.status = status;
    saveLocalData(localData);
  }

  try {
    const db = await connectToDatabase();
    if (db) {
      await QuoteModel.findByIdAndUpdate(id, { status });
    }
  } catch (err) {
    // handled
  }

  return true;
}
