import { GlobalStyle } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './styles/themes/default.ts';
import { Transactions } from './pages/Transactions/index.tsx';
import { TransactionProvider } from './contexts/TransactionContext.tsx';

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
