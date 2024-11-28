import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas: 
  "header" 
  "content";

`

export const Content = styled.div`
  height: max-content;
  grid-area: content;
  
  padding: 3rem 7.6rem 3.6rem;

  @media (max-width: 1024px) {
    padding: 2.5rem 2rem 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  
  }

  > main {
    overflow-y: scroll;
    height: 18.75rem;
    
    padding-right: 0.625rem;
  

    display: flex;
    gap: 1.5rem;
    flex-direction: column;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme })  => theme.COLORS.ACCENT}; /* Cor rosa para a seta */
      border-radius: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent; /* Background transparente */
    }
  }
`

export const Title = styled.div`
  margin-bottom: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  >h1 {
    font-size: 2rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE};

    @media (max-width: 425px) {
     font-size: 1.5rem ;
    }
  }

  > button {
    margin: 0;
    width: 13rem;

    @media (max-width: 425px) {
      height: 3rem;
    }
  }
`