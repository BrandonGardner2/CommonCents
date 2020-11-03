export interface TransactionInput {
  amount?: number;
  date?: string;
  description?: string;
  name?: string;
  type: TransactionTypes;
}

export interface Transaction {
  amount: number;
  date: string;
  description?: string;
  name: string;
  type: TransactionTypes;
}

export type TransactionTypes = 'Income' | 'Expense';

export const TRANSACTIONS = {
  INCOME: 'Income',
  EXPENSE: 'Expense',
};
