export const MODULE_ROUTES = {
  home: "/",
  turismo: "/turismo",
  mobilita: "/mobilita",
  eventi: "/eventi",
  servizi: "/servizi",
  comunita: "/comunita",
  segnalazioni: "/segnalazioni",
} as const;

export const SUPPORTED_LANGUAGES = ["IT", "EN", "FR", "DE", "ES", "JA", "ZH", "AR"] as const;

export const COLOR_THEME = {
  blue: "#003366",
  gold: "#C8A951",
  light: "#F5F5F0",
  white: "#FFFFFF",
  darkText: "#1A1A1A",
} as const;

export const API_BASE_URLS = {
  turismo: process.env.NEXT_PUBLIC_API_TURISMO ?? "https://api.torino360.it/turismo",
  mobilita: process.env.NEXT_PUBLIC_API_MOBILITA ?? "https://api.torino360.it/mobilita",
  eventi: process.env.NEXT_PUBLIC_API_EVENTI ?? "https://api.torino360.it/eventi",
  servizi: process.env.NEXT_PUBLIC_API_SERVIZI ?? "https://api.torino360.it/servizi",
  meteo: process.env.NEXT_PUBLIC_API_METEO ?? "https://api.torino360.it/meteo",
} as const;
