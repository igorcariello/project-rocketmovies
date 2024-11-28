import styled from "styled-components";
import backgroundImg from '../../assets/backgroudimage.jpg'

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: stretch;

  @media (max-width: 600px) {
    display: flex;
  }

`

export const Form = styled.form`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 4rem  8.5rem;

  @media (max-width: 1024px) {
    padding: 4rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 600px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 425px) {
    padding: 4rem 0.5rem;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.ACCENT};
    font-size: 3rem;
    font-weight: 700;

    @media (max-width: 425px) {
      font-size: 2.5rem;
    }
  }

  > p {
    font-family: 'Roboto Slab',serif;
    font-size: 0.875rem;
    font-weight: 400;
    
    margin-bottom: 3rem;
    
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    @media (max-width: 425px) {
      font-size: 0.75rem;
    }
  }

  > h2 {
    font-size: 1.5rem;
    font-weight: 500;

    margin-bottom: 3rem;    
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    @media (max-width: 425px) {
      font-size: 1.25rem;
    }
  }

  > div { 
    @media (max-width: 425px) {
      height: 3rem;
    }
  }

  > button:first-of-type{
    @media (max-width: 425px) {
      height: 3rem;
    }
  }

  
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;


  @media (max-width: 600px) {
    display: none;
  }
`