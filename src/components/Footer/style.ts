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

  @media screen and (max-width: 720px) {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;

    img {
      width: 30%;
      height: 30%;
    }
    .content {
      text-align: end;
      width: 70%;
      ul {
        justify-content: end;
      }
    }
  }

  @media screen and (max-width: 520px) {
    padding-top: 1rem;
    flex-direction: column;
    gap: 1rem;
    .content {
      width: 100%;
      text-align: center;
      ul {
        justify-content: center;
      }
    }
  }
`;
