import styled from "styled-components";


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

  overflow-y: scroll;


  padding-right: 0.625rem;

  &::-webkit-scrollbar{
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
      background-color: ${({ theme })  => theme.COLORS.ACCENT}; 
      border-radius: 8px;
    }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media (max-width: 1024px) {
    margin: 1.5rem 2rem 3rem;
  }

  @media (max-width: 768px) {
    margin: 1rem 1rem 2rem;
  }

  @media (max-width: 425px) {
    margin-top: 0.5rem;
  }


  >main {
    display: flex;
    gap: 2.5rem;
    flex-direction: column;
    
    @media (max-width: 1024px) {
      gap: 1.5rem;
    }

    @media (max-width: 768px) {
      gap: 0.5rem;
    }

    
    h1 {
      font-size: 2.25rem;
      font-weight: 500;
  
      color: ${({ theme }) => theme.COLORS.WHITE};
    
      @media (max-width: 768px) {
        font-size: 1.75rem;
      }
    }

    div:nth-of-type(1){
      display: flex;
      gap: 2.5rem;

    }

    h2 {
      font-size: 1.25rem;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    }
  
    .create-tag{
      width: 100%;
      min-height: 5.5rem;
      display: flex;
      gap: 1.5rem;
      overflow-x: hidden;
      flex-wrap: wrap;
      
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      border-radius: 8px;
      padding: 1rem;

      div{
        max-width: fit-content;
      }

    }

    .save-delete{
      display: flex;
      width: 100%;
      
      button {
        margin-bottom: 0;
        width: 30%;
        margin-left: 70%;
      }
    }
  
  }
  
`