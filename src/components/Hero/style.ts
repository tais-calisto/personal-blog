import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: ' space content image';
  align-items: center;
  text-align: center;

  .space {
    grid-area: space;
  }

  .content {
    grid-area: content;
  }

  .image {
    grid-area: image;
    text-align: end;
    img {
      width: 60%;
      height: 100%;
    }
  }

  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: space-around;
  }

  @media screen and (max-width: 520px) {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .image {
      text-align: center;
      img {
        width: 60%;
        height: 100%;
      }
    }
  }
`;
