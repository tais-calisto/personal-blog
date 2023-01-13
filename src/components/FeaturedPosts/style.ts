import styled from 'styled-components';

export const Container = styled.section`
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 'first second' 'first third' 'first fourt';
  column-gap: 1.5rem;

  article {
    cursor: pointer;
    transition: 0.5s ease-in-out;
    border-radius: 0.5rem;
  }

  article:first-child {
    grid-area: first;
    justify-self: center;
    background-color: ${({ theme }) => theme.colors.accentBackground};
    img,
    .content {
      padding: 1.5rem;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    img {
      border-radius: 2rem;
      width: 100%;
      height: 15rem;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.pink};
    }
  }
  article:nth-child(2) {
    grid-area: second;
  }
  article:nth-child(3) {
    grid-area: third;
  }
  article:nth-child(4) {
    grid-area: fourt;
  }

  article:nth-child(2),
  article:nth-child(3),
  article:nth-child(4) {
    display: flex;
    gap: 1.5rem;
    align-self: center;
    padding: 1rem;

    .content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .resume {
      display: none;
    }
    img {
      max-width: 143px;
      max-height: 103px;
      border-radius: 0.5rem;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentBackground};
    }
  }

  @media screen and (max-width: 720px) {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    article:first-child {
      grid-area: first;
      background-color: transparent;

      img,
      .content {
        padding: 0;
      }

      .resume {
        display: none;
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }

    article:first-child,
    article:nth-child(2),
    article:nth-child(3),
    article:nth-child(4) {
      display: flex;
      gap: 0.5rem;
      padding: 0.5rem;
      align-self: flex-start;
      width: 100%;
      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        align-self: center;
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.accentBackground};
      }
    }
  }

  @media screen and (max-width: 520px) {
    article:first-child,
    article:nth-child(2),
    article:nth-child(3),
    article:nth-child(4) {
      img {
        display: none;
      }
    }
  }
`;
