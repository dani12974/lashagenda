// =========================================================
// LASHAGENDA — configuração do Supabase
// =========================================================

const SUPABASE_URL = "https://gutgbbvgltiqqxxetotk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Z5F72ytNmxO5E4GFVtoqCg_0SZGFGTL";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function getActiveBusiness() {
  const raw = localStorage.getItem("lashagenda_business");
  return raw ? JSON.parse(raw) : null;
}

function setActiveBusiness(business) {
  localStorage.setItem("lashagenda_business", JSON.stringify(business));
}

function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatBRL(value) {
  return Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
