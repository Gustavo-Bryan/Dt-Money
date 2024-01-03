import { useContext } from 'react';

import { Header } from '../../components/Header/inder';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';

import {
  PriceHighlight,
  TransactionTableContainer,
  TransactionTableContent,
} from './styles';
import { TransactionsContext } from '../../contexts/TransactionContext';
import { dateFormatter, priceFormatter } from '../../utils/formatter';

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      <Header />
      <Summary />

      <TransactionTableContainer>
        <SearchForm />
        <TransactionTableContent>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionTableContent>
      </TransactionTableContainer>
    </div>
  );
}
