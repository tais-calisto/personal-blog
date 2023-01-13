import styled from 'styled-components';

export const ToggleStyle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.7rem;
  right: 6rem;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 720px) {
    top: 1.4rem;
    right: 3rem;
  }
`;
