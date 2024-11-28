import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    padding: 1rem;
  }

  > header {
    width: 100%;
    height: 9rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

    button {
      margin-top: 4rem;
      margin-left: 9rem;

      background-color: aliceblue;
      
      @media (max-width: 768px) {
        margin-left: 1rem;
        margin-top: 4rem;
      }

      @media (max-width: 425px) {
        margin-left: 0;
      }
    }
  }

`

export const Form = styled.form`
  width: 340px;
  margin: -104px auto 0;
  
`
export const Image = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  margin: 0 auto 64px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.ACCENT};
  
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 10px;
    bottom: 4px;

    cursor: pointer;
    
    input{
    display: none;
    }

    svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }  

  }

  

`