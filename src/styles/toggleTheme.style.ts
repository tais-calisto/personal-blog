import styled from 'styled-components';

export const ToggleStyle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.7rem;
  right: 6rem;
  color: ${({ theme }) => theme.colors.text};
`;
