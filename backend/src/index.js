import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

const app = express();
app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or key not set');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/api/health', async (req, res) => {
  const { error } = await supabase.from('health').select('status').limit(1);
  if (error) {
    console.error('Supabase health check failed:', error.message);
    res.status(500).json({ error: 'Supabase connection failed' });
    return;
  }

  res.json({ status: 'ok' });
});

export default app;