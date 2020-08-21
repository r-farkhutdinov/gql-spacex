import React from 'react';
import { useGetShips } from './hooks/useGetShips';
import { Ship } from './components/Ship/Ship.component';
import { ShipsContainerStyled, ShipsHeaderStyled } from './Ships.styles';
import { ThemeContext } from 'styled-components';

export const Ships: React.FC = () => {
  const { data } = useGetShips();
  const themeContext = React.useContext(ThemeContext);

  console.log('Current theme: ', themeContext);

  return (
    <>
      <ShipsHeaderStyled>Ships</ShipsHeaderStyled>
      <ShipsContainerStyled>
        {data?.ships.map((ship) => (
          <Ship key={ship.id} ship={ship} />
        ))}
      </ShipsContainerStyled>
    </>
  );
};
