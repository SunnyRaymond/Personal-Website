import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zwwaluhcljmntwgzmgou.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3d2FsdWhjbGptbnR3Z3ptZ291Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2MzY3OTcsImV4cCI6MjA0NjIxMjc5N30.neqr7exLysR_lopMeEf5omOI3ST5wKUyuxf21y6vi9o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
