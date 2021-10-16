import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface TableItemProps {
  order: number;
  text: string;
  handleClick: (event: any, value: number) => void;
  selected: boolean;
}

export const TableItem = (props: TableItemProps) => {
  const { order, text, handleClick, selected } = props
  return (
    <Card
      onClick={event => handleClick(event, order)}
      sx={{ color: "#fff", height: "15vh", width: "15vw", m: 0.5, backgroundColor: selected ? "#3969a2" : "#9472c2"}}
    >
      <CardContent>
        <Typography sx={{ fontSize: "1vh" }} color="text.secondary">
          {order +1 }
        </Typography>
        <Typography sx={{ fontSize: "1vh" }} component="div">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}