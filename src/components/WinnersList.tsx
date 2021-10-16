import * as React from 'react';
import Typography from '@mui/material/Typography';

interface WinnersListProps {
  winnersList: string[];
}

export const WinnersList = (props: WinnersListProps) => {
  const { winnersList } = props
  return (
    <>
      <Typography sx={{ fontSize: 20, color: "red" }}>
        winners:
      </Typography>
      {
        winnersList.map((element, index) => (
          <Typography sx={{ fontSize: 20, color: "#fff" }}>
            {`${index + 1}- ${element}`}
          </Typography>
        ))
      }
    </>
  );
}