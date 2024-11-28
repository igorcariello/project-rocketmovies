import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 3.5rem;
  
  background-color: ${({ theme }) => theme.COLORS.ACCENT};
  border: none;
  border-radius: 10px;
  
  margin: 1rem auto 2.6rem;
  
  font-weight: 500;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  
  > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5px;
  }
`