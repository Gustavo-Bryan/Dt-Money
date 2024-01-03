import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../lib/axios';

export interface ITransaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: 'string';
  price: number;
  createdAt: string;
}

interface ITransactionProvider {
  transactions: ITransaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: ICreateTransaction) => Promise<void>;
}

export const TransactionsContext = createContext({} as ITransactionProvider);

interface TransactionProviderProps {
  children: ReactNode;
}

interface ICreateTransaction {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}
export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });

    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function createTransaction(data: ICreateTransaction) {
    const { description, price, category, type } = data;

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
