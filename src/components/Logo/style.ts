import styled from 'styled-components';
import '@fontsource/averia-gruesa-libre';

export const LogoStyle = styled.div`
  width: 3rem;
  cursor: pointer;

  transition: 0.5s ease-in-out;

  &:hover {
    transform: rotate(-10deg);
  }

  img {
    position: relative;
    margin-top: 0.2rem;
    margin-left: 1.8rem;
    width: 100%;
    height: 100%;
  }

  p {
    font-size: 1rem;
    font-family: 'Averia Gruesa Libre', cursive;
    position: absolute;
    top: 2rem;
    width: 3rem;
    line-height: 1.25rem;
  }
`;
