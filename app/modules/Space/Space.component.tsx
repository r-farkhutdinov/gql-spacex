import React from 'react';
import { ContainerStyled } from './Space.styles';
import { Ships } from '../Ships/Ships.component';

export const Space: React.FC = () => (
  <ContainerStyled>
    <Ships />
  </ContainerStyled>
);
