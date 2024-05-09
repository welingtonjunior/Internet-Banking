export interface TransactionForm {
    accountOrigin: number;
    accountDestination: number;
    amount: number;
    description: string;
    transactionType: string;
    transactionDate: string;
    securityPassword: string;
  }