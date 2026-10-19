import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { saveQuote, listQuotes } from '../store.js';

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELDS = ['name', 'email', 'phone', 'city', 'service', 'budget', 'message'];

const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again in a few minutes or give us a call.' },
});

function validate(body) {
  const errors = {};
  const data = {};
  for (const f of FIELDS) data[f] = typeof body[f] === 'string' ? body[f].trim() : '';

  if (!data.name) errors.name = 'Please enter your name.';
  else if (data.name.length > 100) errors.name = 'Name must be 100 characters or fewer.';

  if (!data.email) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(data.email)) errors.email = 'Enter an email like name@example.com.';

  if (data.phone && !/^[\d\s()+.-]{7,30}$/.test(data.phone))
    errors.phone = 'Enter a phone number like (512) 555-0123.';

  if (data.message.length > 2000) errors.message = 'Please keep your message under 2,000 characters.';

  return { data, errors };
}

router.post('/', submitLimiter, async (req, res, next) => {
  try {
    // Honeypot: bots fill the hidden "website" field, people don't.
    if (req.body?.website) return res.status(201).json({ ok: true });

    const { data, errors } = validate(req.body || {});
    if (Object.keys(errors).length) return res.status(400).json({ error: 'Please fix the highlighted fields.', fields: errors });

    const quote = await saveQuote(data);
    res.status(201).json({ ok: true, id: quote._id });
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  const token = process.env.ADMIN_TOKEN;
  if (!token || req.get('x-admin-token') !== token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    res.json(await listQuotes());
  } catch (err) {
    next(err);
  }
});

export default router;
