export interface Attrazione {
  id: string;
  nome: string;
  categoria: string;
  descrizione: string;
  orari: string;
  prezzi: string;
  coordinate: { lat: number; lng: number };
  immagini: string[];
  accessibile: boolean;
}

export interface Evento {
  id: string;
  titolo: string;
  data: string;
  luogo: string;
  categoria: string;
  prezzo: string;
  url: string;
}

export interface Fermata {
  id: string;
  nome: string;
  linea: string;
  orariProssimi: string[];
}

export interface Servizio {
  id: string;
  nome: string;
  categoria: string;
  url: string;
  descrizione: string;
}

export interface Utente {
  id: string;
  nome: string;
  preferenze: Record<string, string>;
  preferiti: string[];
}

export interface Segnalazione {
  id: string;
  tipo: string;
  indirizzo: string;
  descrizione: string;
  stato: 'aperto' | 'in_elaborazione' | 'risolto';
  data: string;
}

export interface Appuntamento {
  id: string;
  ufficio: string;
  data: string;
  ora: string;
  motivo: string;
  stato: 'confermato' | 'in_attesa' | 'annullato';
}
