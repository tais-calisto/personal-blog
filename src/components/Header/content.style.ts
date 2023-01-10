import styled from 'styled-components';

export const ContentStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
  }

  nav {
    ul {
      justify-content: space-between;
    }
  }

  div {
    ul {
      justify-content: center;
      gap: 2rem;
    }
  }

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0;

    nav {
      ul {
        flex-direction: column;
        gap: 1rem;
      }
    }

    div {
      ul {
        gap: 1rem;
      }
    }
  }
`;
