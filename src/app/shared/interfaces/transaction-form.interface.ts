export interface TransactionForm {
  accountDestination?: number;
  accountNumber?: number | string | null;
  accountOrigin?: number;
  amount?: number;
  description?: string;
  name?: string | null;
  securityPassword?: string;
  transactionDate?: string;
  transactionType?: string;
  email?: string | null;
  phone?: number | string | null;
}

export interface Profile extends Pick<TransactionForm, 'accountNumber' | 'email' | 'phone' | 'name'> {}
