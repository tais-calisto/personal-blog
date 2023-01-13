import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  margin: 0.5rem 6rem;

  .mobileContent {
    display: none;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    align-content: center;

    margin: 0.5rem 3rem;

    .desktopContent {
      display: none;
    }

    .mobileContent {
      display: block;
      text-align: end;
      position: relative;
      color: ${({ theme }) => theme.colors.text};
      margin-right: 6rem;
    }

    .menuMobile {
      position: fixed;
      width: 100%;
      left: 0;
      top: 5rem;
      background-color: ${({ theme }) => theme.colors.pink};
      filter: drop-shadow(5px 5px 15px ${({ theme }) => theme.colors.shadow});
    }
  }
`;
