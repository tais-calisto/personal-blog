import styled from 'styled-components';

export const Container = styled.section`
  padding: 6rem 0;
  h2 {
    text-align: center;
  }
  .content {
    width: 60%;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  @media screen and (max-width: 720px) {
    margin: 0 3rem;
    padding: 2rem 0;
    .content {
      width: 100%;
      padding-top: 2rem;
      flex-direction: column;
      text-align: justify;
      img {
        width: 8rem;
        height: 8rem;
      }
    }
  }
`;
