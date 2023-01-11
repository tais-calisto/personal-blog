import styled from 'styled-components';

export const Container = styled.section`
  width: 50%;
  margin: 6rem auto 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .image {
    img {
      width: 100%;
      border-radius: 0.5rem;
      height: 40vh;
    }
  }

  .info {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h1 {
      text-align: center;
    }
    p {
      text-align: justify;
    }
  }
`;
