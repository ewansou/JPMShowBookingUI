import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";

import Admin from "./components/Admin";
import AdminRetrieveShows from "./components/AdminRetrieveShows";
import AdminRetrieveAllShowsSeatings from "./components/AdminRetrieveAllShowsSeatings";
import AdminViewShowByShowNumber from "./components/AdminViewShowByShowNumber";
import AdminViewShowSeatingsByShowNumber from "./components/AdminViewShowSeatingsByShowNumber";
import AdminViewShowSeatingsByShowNumberAndStatus from "./components/AdminViewShowSeatingsByShowNumberAndStatus";
import AdminSetupShow from "./components/AdminSetupShow";

import Buyer from "./components/Buyer";
import BuyerRetrieveAvailableSeatingsByShowNumber from "./components/BuyerRetrieveAvailableSeatingsByShowNumber";
import BuyerBookSeats from "./components/BuyerBookSeats";
import BuyerCancelTicket from "./components/BuyerCancelTicket";

import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from "./theme"
import CssBaseline from '@material-ui/core/CssBaseline'

import { history } from "./helpers/history";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/adminretrieveShows">
              <AdminRetrieveShows />
            </Route>
            <Route exact path="/adminretrieveallshowsseatings">
              <AdminRetrieveAllShowsSeatings />
            </Route>
            <Route exact path="/adminviewshowbyshownumber">
              <AdminViewShowByShowNumber />
            </Route>
            <Route exact path="/adminretrieveshowseatingsbyshownumber">
              <AdminViewShowSeatingsByShowNumber />
            </Route>
            <Route exact path="/adminretrieveshowseatingsbyshownumberandstatus">
              <AdminViewShowSeatingsByShowNumberAndStatus />
            </Route>
            <Route exact path="/adminsetupshow">
              <AdminSetupShow />
            </Route>
            <Route exact path="/buyer">
              <Buyer />
            </Route>
            <Route exact path="/buyerretrieveavailableseatingsbyshownumber">
              <BuyerRetrieveAvailableSeatingsByShowNumber />
            </Route>
            <Route exact path="/buyerbookseats">
              <BuyerBookSeats />
            </Route>
            <Route exact path="/buyercancelticket">
              <BuyerCancelTicket />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
