import { createClient } from '@supabase/supabase-js';

// MENGISI MANUAL SEMENTARA (Ganti dengan punyamu)
const supabaseUrl = "https://amjnxdrhktwgaiqvskor.supabase.co"; 
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtam54ZHJoa3R3Z2FpcXZza29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4MDYzOTAsImV4cCI6MjA5ODM4MjM5MH0.e9owE-43mXlm8E9k2vIOx5R1Y_X8lCbYvkTyXVL_CWY";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;