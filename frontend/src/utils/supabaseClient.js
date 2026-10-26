import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hwcqcovldmslzviiwcng.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3Y3Fjb3ZsZG1zbHp2aWl3Y25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI5OTcwMDYsImV4cCI6MjEwODU3MzAwNn0.xJmBx5PhGSDMnVyrC_wtEE4yYXvmbXD_acqO5CRQ0EU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
