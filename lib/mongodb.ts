import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface CachedMongoose {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: CachedMongoose = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<typeof mongoose | null> {
  // If running in Vercel and MONGODB_URI is absent or localhost, skip connection attempt
  if (!MONGODB_URI || (process.env.VERCEL && MONGODB_URI.includes('localhost'))) {
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 2000,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((m) => {
        console.log('✅ Connected to MongoDB successfully.');
        return m;
      })
      .catch((err) => {
        console.warn('⚠️ MongoDB connection attempt failed. Operating in fallback storage mode.', err.message);
        cached.promise = null;
        return null;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    return null;
  }

  return cached.conn;
}
