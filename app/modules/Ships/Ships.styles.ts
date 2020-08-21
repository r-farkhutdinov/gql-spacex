import styled from 'styled-components';

export const ShipsPageContainerStyled = styled.div`
  padding: 24px;
`;

export const ShipsContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ShipsHeaderStyled = styled.h1`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.text};
`;
