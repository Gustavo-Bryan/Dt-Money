import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;

  input {
    flex: 1;
    background-color: ${(props) => props.theme['gray-900']};
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.75rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 6px;
    transition: all 0.2s;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['green-500']};
      border: 1px solid ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme['white']};
    }
  }
`;
