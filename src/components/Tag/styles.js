import styled from "styled-components";


export const Container = styled.span`
  width: fit-content;
  padding: 0.3125rem 1rem;

  border-radius: 0.5rem;

  font-family: 'Roboto', serif;
  font-size: 0.75rem;
  font-size: 400;

  color: #E5E5E5;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`