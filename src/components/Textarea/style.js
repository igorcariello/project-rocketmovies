import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  padding: 1rem 1.125rem;
  
  > textarea {
    width: 100%;
    height: 17rem;
    
    resize: none;
    
    background-color: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

  }

 
`