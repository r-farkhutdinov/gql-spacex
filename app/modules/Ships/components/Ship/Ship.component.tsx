import React from 'react';
import { ShipPartFragment } from '../../../../__generated__/schema';
import { ShipStyled } from './Ship.styles';

type Props = {
  ship: ShipPartFragment;
};

export const Ship: React.FC<Props> = ({ ship }) => {
  return <ShipStyled>{ship.name}</ShipStyled>;
};
