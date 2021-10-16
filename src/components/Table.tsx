import { Box, Button, Grid, Modal, Typography, Input, InputLabel, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from 'react';
import Confetti from 'react-confetti'
import { TableItem } from './TableItem';
import { items, winningCombination } from './utils';
import { WinnersList } from './WinnersList';

const boxStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'transparent',
};

export const Table = () => {
  const [selectedItems, setSelectedItems] = React.useState<boolean[]>(new Array(25).fill(false))
  const [winners, setWinners] = React.useState<number[][]>([])
  const [winnerInput, setWinnerInput] = React.useState<string>("")
  const [winnersList, setWinnersList] = React.useState<string[]>([])
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const [bingoItems, setBingoItems] = React.useState<string[]>(items)

  const handleClick = (event: any, value: number) => {
    event.preventDefault();
    const selectedItemsCopy = [...selectedItems]
    const winnersCopy = [...winners]
    if (selectedItemsCopy[value] === true) {
      setWinners(winnersCopy.filter(elt => elt.every((val: number) => val !== value)))
    }
    if (value !== 12) {
      selectedItemsCopy[value] = !selectedItemsCopy[value]
      selectedItemsCopy[12] = true
      setSelectedItems(selectedItemsCopy)
    }
    winningCombination.forEach(elt => {
      if (elt.every((value) => selectedItemsCopy[value] === true) && !winners.some((winner: number[]) => winner === elt)) {
        winnersCopy.push(elt)
        setWinners(winnersCopy)
        setOpenModal(true)
      }
    })
  }

  const shuffleItems = (arr: string[]): string[] => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
  }

  return (
    <>
      <Modal
        open={openModal}
      >
        <>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
          />
          <Box
            sx={boxStyle}>
            <Typography sx={{ fontSize: 100, color: "purple" }} component="div">
              Bingo!
            </Typography>
            <Box sx={{
              my: 5,
              mx: 5,
              color: "#fff"
            }}>
              {selectedItems.some(elt => elt === false) ? (
                <>
                  <InputLabel
                    sx={{
                      color: "#fff"
                    }}
                    htmlFor="input-with-icon-adornment">
                    Winner(s) Name
                  </InputLabel>
                  <Input
                    sx={{
                      color: "#fff"
                    }}
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle
                          sx={{
                            color: "#fff"
                          }} />
                      </InputAdornment>
                    }
                    value={winnerInput}
                    onChange={(event) => setWinnerInput(String(event.target.value))}
                  />
                </>) : (
                <WinnersList winnersList={winnersList} />
              )}
            </Box>
            <Box sx={{
              display: 'flex',
              my: 5
            }}>
              <Button
                sx={{
                  display: 'inline-flex',
                  mx: 2
                }}
                variant="contained"
                onClick={() => {
                  setWinners([])
                  setSelectedItems(new Array(25).fill(false))
                  setWinnersList([])
                  setWinnerInput('')
                  setOpenModal(false)
                  const newBingoItems = shuffleItems(bingoItems)
                  setBingoItems(newBingoItems)
                }}>New Game</Button>
              {selectedItems.some(elt => elt === false) && (<Button
                sx={{ display: 'inline-flex', mx: 2 }}
                variant="contained"
                onClick={() => {
                  setWinnersList([...winnersList, winnerInput])
                  setWinnerInput('')
                  setOpenModal(false)
                }}>Continue</Button>)}
            </Box>
          </Box>
        </>
      </Modal>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '80vh' }}>
        <Grid style={{ display: 'inline-flex' }}>
          <TableItem order={0} handleClick={handleClick} selected={selectedItems[0]} text={bingoItems[0]} />
          <TableItem order={1} handleClick={handleClick} selected={selectedItems[1]} text={bingoItems[1]} />
          <TableItem order={2} handleClick={handleClick} selected={selectedItems[2]} text={bingoItems[2]} />
          <TableItem order={3} handleClick={handleClick} selected={selectedItems[3]} text={bingoItems[3]} />
          <TableItem order={4} handleClick={handleClick} selected={selectedItems[4]} text={bingoItems[4]} />
        </Grid>
        <Grid style={{ display: 'inline-flex' }}>
          <TableItem order={5} handleClick={handleClick} selected={selectedItems[5]} text={bingoItems[5]} />
          <TableItem order={6} handleClick={handleClick} selected={selectedItems[6]} text={bingoItems[6]} />
          <TableItem order={7} handleClick={handleClick} selected={selectedItems[7]} text={bingoItems[7]} />
          <TableItem order={8} handleClick={handleClick} selected={selectedItems[8]} text={bingoItems[8]} />
          <TableItem order={9} handleClick={handleClick} selected={selectedItems[9]} text={bingoItems[9]} />
        </Grid>
        <Grid style={{ display: 'inline-flex' }}>
          <TableItem order={10} handleClick={handleClick} selected={selectedItems[10]} text={bingoItems[10]} />
          <TableItem order={11} handleClick={handleClick} selected={selectedItems[11]} text={bingoItems[11]} />
          <TableItem order={12} handleClick={handleClick} selected={selectedItems[12]} text={bingoItems[12]} />
          <TableItem order={13} handleClick={handleClick} selected={selectedItems[13]} text={bingoItems[13]} />
          <TableItem order={14} handleClick={handleClick} selected={selectedItems[14]} text={bingoItems[14]} />
        </Grid>
        <Grid style={{ display: 'inline-flex' }}>
          <TableItem order={15} handleClick={handleClick} selected={selectedItems[15]} text={bingoItems[15]} />
          <TableItem order={16} handleClick={handleClick} selected={selectedItems[16]} text={bingoItems[16]} />
          <TableItem order={17} handleClick={handleClick} selected={selectedItems[17]} text={bingoItems[17]} />
          <TableItem order={18} handleClick={handleClick} selected={selectedItems[18]} text={bingoItems[18]} />
          <TableItem order={19} handleClick={handleClick} selected={selectedItems[19]} text={bingoItems[19]} />
        </Grid>
        <Grid style={{ display: 'inline-flex' }}>
          <TableItem order={20} handleClick={handleClick} selected={selectedItems[20]} text={bingoItems[20]} />
          <TableItem order={21} handleClick={handleClick} selected={selectedItems[21]} text={bingoItems[21]} />
          <TableItem order={22} handleClick={handleClick} selected={selectedItems[22]} text={bingoItems[22]} />
          <TableItem order={23} handleClick={handleClick} selected={selectedItems[23]} text={bingoItems[23]} />
          <TableItem order={24} handleClick={handleClick} selected={selectedItems[24]} text={bingoItems[24]} />
        </Grid>
      </Grid>
      <WinnersList winnersList={winnersList} />
    </>
  );
}
