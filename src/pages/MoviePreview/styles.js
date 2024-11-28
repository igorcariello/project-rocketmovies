import { styled } from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;

  grid-template-areas: 
  "header"
  "content";

  > button {
    margin-top: 2.5rem;
    margin-left: 7.6rem;

    width: min-content;

    @media (max-width: 1024px) {
      margin-top: 2rem;
      margin-left: 2rem;
    }

    @media (max-width: 768px) {
      margin: 1rem;
    }
  }

`

export const Content = styled.div`
  margin: 1.5rem 7.6rem 3rem;
  padding: 0 4rem 0 8rem;
  overflow-y: scroll;

  &::-webkit-scrollbar{
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.COLORS.ACCENT};
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-track{
    background-color: transparent;
  }

  @media (max-width: 1024px) {
    margin: 1.5rem 2rem 3rem;
  }

  @media (max-width: 768px) {
    margin: 1rem 1rem 2rem;
    padding-left: 3rem;
    padding-right: 2rem;
    
  }

  @media (max-width: 425px) {
    margin-top: 0.5rem;
    padding: 0;
  }
  
  > div:nth-of-type(1){
    display: flex;
    align-items: center;
    gap: 1.2rem;

    @media (max-width: 1024px) {
      gap: 0.8rem;
    }

    @media (max-width: 768px) {
      gap: 0.5rem;
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 2.25rem;
      font-weight: 500;

      
      @media (max-width: 768px) {
        font-size: 1.75rem;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      
      svg {
        width: 1.25rem;
        height: 1.25rem;
        margin-top: 0.375rem;
      }
    }
    
  }

  button {
    width: 25%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.ACCENT};
  }

  > div:nth-of-type(2){
    display: flex;
    align-items: center;
    gap: 0.5rem;

    
    margin-top: 1.5rem;

    @media (max-width: 768px) {
      margin-top: 1rem;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      
      font-family: "Roboto", serif;
      font-weight: 400;
      font-size: 1rem;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.ACCENT};
    }
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 35px;

      border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    }
  }

  > div:nth-of-type(3){
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

    display: flex;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  > p {
    text-align: justify;
    font-family: "Roboto Slab", serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-right: 1rem;
  }

  > p + p {
    margin-top: 1.5rem;
  }

`