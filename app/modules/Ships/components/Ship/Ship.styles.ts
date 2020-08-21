import styled from 'styled-components';

export const ShipStyled = styled.div`
  height: 100px;
  border: 2px solid ${({ theme }) => theme.colors.main};
  border-radius: 15px;

  padding: 24px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.hover};
  }
`;
