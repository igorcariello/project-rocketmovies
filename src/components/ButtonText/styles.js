import styled from "styled-components";


export const Container = styled.button`
  display: flex;
  align-items: center;
  border: none;
  gap: 2.5px;
  background: none;

  color: ${({ theme }) => theme.COLORS.ACCENT};
`