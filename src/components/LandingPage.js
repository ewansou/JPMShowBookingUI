import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

function LandingPage() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      minHeight: "100%",
      padding: theme.spacing(0),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={4} sm={4}>
          <Paper className={classes.paper} variant="outlined" square>
            <h1>Admin</h1>
            <Button variant="contained" color="primary">
              <Link href="/admin">SELECT</Link>
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Paper className={classes.paper} variant="outlined" square>
            <h1>Buyer</h1>
            <Button variant="contained" color="primary">
              <Link href="/buyer">
                SELECT
              </Link>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
