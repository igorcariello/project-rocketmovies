import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: min-content;
  height: fit-content;
  

  border: ${({theme, isNew}) => isNew ? `dashed 2px ${theme.COLORS.GRAY_500}` : 'none'};

  background-color: ${({ theme, isNew}) => isNew ? 'none' : theme.COLORS.BACKGROUND_700 };

  > input {
    height: 3.5rem;
    width: 9.375rem;
    border: none;

    font-size: 1rem;
    font-family: 'Roboto', serif;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color:transparent;
    padding: 1rem;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }
  }

  > button {
    background: transparent;
    border: none;
    padding-right:1rem;
    
    color: ${({ theme }) => theme.COLORS.ACCENT};
    
    svg {
      width: 1.375rem;
      height:1.5rem;
    }
  }

`