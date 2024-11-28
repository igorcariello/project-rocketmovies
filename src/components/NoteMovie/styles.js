import styled from "styled-components";


export const Container = styled.div`
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_ACCENT};

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 2rem 2rem 0;
  }
  
  > div:nth-of-type(1) {
    padding: 0 2rem 1rem;
  }

  > p {
    height: 2.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    

    padding: 0 2rem 1rem;
  }

  > div:nth-of-type(2) {
    padding: 1rem 2rem 2rem;
    display: flex;
    gap: 0.5rem;
  }

`