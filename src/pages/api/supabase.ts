import { createClient } from '@supabase/supabase-js';

const apiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabase = createClient(apiUrl!, apiKey!);

export default supabase;
