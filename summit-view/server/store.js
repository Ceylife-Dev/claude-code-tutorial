// Persistence layer for quote requests.
// Uses MongoDB when MONGODB_URI is set; otherwise falls back to a local JSON file
// so the site works out of the box without a database.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import mongoose from 'mongoose';
import Quote from './models/Quote.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(__dirname, 'data', 'quotes.json');

let useMongo = false;

export async function connectStore() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('[store] MONGODB_URI not set: saving quotes to server/data/quotes.json');
    return 'file';
  }
  await mongoose.connect(uri);
  useMongo = true;
  console.log('[store] Connected to MongoDB');
  return 'mongo';
}

async function readFile() {
  try {
    return JSON.parse(await fs.readFile(FILE, 'utf8'));
  } catch {
    return [];
  }
}

export async function saveQuote(data) {
  if (useMongo) return Quote.create(data);
  const quotes = await readFile();
  const now = new Date().toISOString();
  const quote = { _id: randomUUID(), ...data, status: 'new', createdAt: now, updatedAt: now };
  quotes.push(quote);
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(quotes, null, 2));
  return quote;
}

export async function listQuotes() {
  if (useMongo) return Quote.find().sort({ createdAt: -1 }).lean();
  return (await readFile()).reverse();
}
