import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TransactionsContext } from '../../../../contexts/TransactionContext';

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext);

  const searchFormSchema = z.object({
    query: z.string(),
  });

  type searchFormTypes = z.infer<typeof searchFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormTypes>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransaction(data: searchFormTypes) {
    fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button disabled={isSubmitting} type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
