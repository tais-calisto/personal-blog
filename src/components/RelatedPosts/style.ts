import styled from 'styled-components';

export const Container = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.accentBackground};
  h1 {
    text-align: center;
    padding: 2rem;
  }
  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
  }
  .postContainer {
    cursor: pointer;
    transition: 0.5s ease-in-out;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.accentBackground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.pink};
    }
    .image {
      img {
        width: 5vw;
        height: 10vh;
      }
    }
  }

  @media screen and (max-width: 720px) {
    .posts {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .postContainer {
      gap: 1rem;
      .image {
        img {
          width: 15vw;
          height: 10vh;
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    .postContainer {
      .image {
        img {
          width: 10vw;
          height: 5vh;
          border-radius: 50%;
        }
      }
    }
  }
`;
