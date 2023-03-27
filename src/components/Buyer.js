import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from "@material-ui/core/Link";

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 10,
    width: 500,
    height: 100,
    color: '#FFFFFF',
    fontSize: 20,
    background: '#F26522'
  },
  hover: {
    "&:hover": {
      backgroundColor: 'rgb(7, 177, 77, 0.42)'
    },
  }
}))

function BuyerMenu() {
  const classes = useStyles()

  return (
    <div>
      <p>Buyer Menu</p>

      <ButtonGroup
        orientation="vertical"
      >

      <Button className={classes.root}>
        <Link underline="none" color="white" href="/buyerretrieveavailableseatingsbyshownumber">Retrieve Available Seats By Show Number</Link>
      </Button>

      <Button className={classes.root}>
        <Link underline="none" href="/buyerbookseats">Book Seats</Link>
      </Button>

      <Button className={classes.root}>
        <Link underline="none" href="/buyercancelticket">Cancel Ticket</Link>
      </Button>
    
      <Button className={classes.root}>
        <Link underline="none" href="/">BACK TO HOME</Link>
      </Button>
      
      </ButtonGroup>
    </div>
  );
}

export default BuyerMenu;
