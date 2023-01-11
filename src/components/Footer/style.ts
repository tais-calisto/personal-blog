import styled from 'styled-components';

export const Container = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  border-top: 2px solid ${({ theme }) => theme.colors.accentBackground};
  .content {
    text-align: center;
    display: flex;
    flex-direction: column;
    .logo {
      p {
        font-size: 1rem;
        font-family: 'Averia Gruesa Libre', cursive;
        padding-bottom: 1.5rem;
      }
    }
    ul {
      display: flex;
      justify-content: center;
      gap: 2rem;
      padding-top: 0.5rem;
      padding-bottom: 1rem;
    }
  }
`;
