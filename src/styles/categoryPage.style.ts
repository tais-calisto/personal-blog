import styled from 'styled-components';

export const Container = styled.section`
  width: 50%;
  margin: 6rem auto 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .postContainer {
    cursor: pointer;
    transition: 0.5s ease-in-out;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.accentBackground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.pink};
    }
    .image {
      img {
        border-radius: 0.5rem;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .date {
        padding: 0.25rem 0.5rem;
        width: fit-content;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.colors.pink};
        p {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }
`;
