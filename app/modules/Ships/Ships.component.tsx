import React from 'react';
import { useGetShips } from './hooks/useGetShips';
import { Ship } from './components/Ship/Ship.component';
import {
  ShipsContainerStyled,
  ShipsHeaderStyled,
  ShipsPageContainerStyled,
} from './Ships.styles';
import { Loader } from '../../common/Loader/Loader.component';

export const Ships: React.FC = () => {
  const { data, loading } = useGetShips();

  return (
    <ShipsPageContainerStyled>
      <ShipsHeaderStyled>Ships</ShipsHeaderStyled>
      <ShipsContainerStyled>
        {loading ? (
          <Loader />
        ) : (
          data?.ships.map((ship) => <Ship key={ship.id} ship={ship} />)
        )}
      </ShipsContainerStyled>
    </ShipsPageContainerStyled>
  );
};
