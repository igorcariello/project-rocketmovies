import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 7.25rem;

  grid-area: header;

  display: grid;
  grid-template-areas: 'brand search profile';
  grid-template-columns: min-content auto max-content;
  grid-template-rows: 7.25rem;
  gap: 1rem;

  align-items: center;


  padding: 0 7.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    height: min-content;

    grid-template-areas: 
    'brand profile'
    'search search';
    grid-template-columns: min-content max-content;
    grid-template-rows: min-content;

    justify-content: space-between;

  }


  > a {
    max-width: fit-content;
    grid-area: brand;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;

      color: ${({ theme }) => theme.COLORS.ACCENT};
    }
  }

  > div:first-of-type{
    grid-area: search;
    height: 3rem;

    
    input {
      
    }
  }

`
export const Profile = styled.div`
  display: flex;
  align-items: center;

  grid-area: profile;

  gap: 9px;

  max-width: fit-content;

  > a {
    
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      border: 1px solid #3E3B47;
    }  
  }

  > div {
    display: flex;
    flex-direction: column;

    p {
    font-size: 0.875rem;
    font-weight: 700;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      
      display: flex;
      align-self: flex-end;
      cursor: pointer;
    }
  }

`