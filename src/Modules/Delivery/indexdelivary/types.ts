// types.ts - Définition des types partagés
export interface Order {
    id: string;
    clientInitials: string;
    clientName: string;
    quantity: number;
    paymentStatus: 'Payé' | 'Non payé' | 'Pas totalement';
    amount: string;
    date: string;
    status: string;
  }