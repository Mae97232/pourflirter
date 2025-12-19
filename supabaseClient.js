import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://psrhocqsussglrcalfxd.supabase.co",       // <-- URL de ton projet Supabase
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzcmhvY3FzdXNzZ2xyY2FsZnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5Nzc1NjksImV4cCI6MjA3OTU1MzU2OX0.d1WKkRBHaAaVvqRgebUws32W0eQVCLgXxa83NsF2Suc"                    // <-- Seulement la clé ANON !
);
