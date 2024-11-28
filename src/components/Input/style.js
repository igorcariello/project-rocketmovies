import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  > input {
    width: 100%;
    height: 3.5rem;
    
    

    background-color: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

  }

  > svg {
    margin-right: 1rem;
  }
`