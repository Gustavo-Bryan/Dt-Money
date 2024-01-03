import styled, { css } from 'styled-components';

export const TransactionTableContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 2.5rem;
  padding: 0 1.5rem;
`;

export const TransactionTableContent = styled.table`
  margin-top: 1.5rem;

  border-collapse: separate;
  border-spacing: 0 0.5rem;
  width: 100%;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-700']};

    &:first-child {
      width: 50%;

      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighlightProps {
  variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  ${(props) =>
    props.variant === 'income'
      ? css`
          color: ${props.theme['green-300']};
        `
      : css`
          color: ${props.theme['red-300']};
        `}
`;
