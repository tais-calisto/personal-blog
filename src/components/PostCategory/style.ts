import styled, { ThemeContext } from 'styled-components';

console.log(ThemeContext.displayName);

export const Container = styled.div`
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 0.25rem 0.5rem;
  width: fit-content;
`;
