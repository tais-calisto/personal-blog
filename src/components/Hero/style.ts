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
`;
