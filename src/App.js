import React from "react";
import { Router, Switch } from "react-router-dom";

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
import theme from "./theme";
import CssBaseline from '@material-ui/core/CssBaseline'

import DynamicLayout from "./router/DynamicLayout";

import { history } from "./helpers/history";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Router history={history}>
        <div className="App">
          <Switch>
            <DynamicLayout
              exact
              path="/"
              component={LandingPage}
              layout="LANDING_NAV"
            />
            <DynamicLayout
              exact
              path="/admin"
              component={Admin}
              layout="PHOTO10_PAGE"
            />
            <DynamicLayout
              exact
              path="/adminretrieveShows"
              component={AdminRetrieveShows}
              layout="PHOTO10_PAGE"
            />
            <DynamicLayout
              exact
              path="/adminretrieveallshowsseatings"
              component={AdminRetrieveAllShowsSeatings}
              layout="PHOTO10_PAGE"
            />
            <DynamicLayout
              exact
              path="/adminviewshowbyshownumber"
              component={AdminViewShowByShowNumber}
              layout="PHOTO10_PAGE"
            />
            <DynamicLayout
              exact
              path="/adminretrieveshowseatingsbyshownumber"
              component={AdminViewShowSeatingsByShowNumber}
              layout="PHOTO10_PAGE"
            />
            <DynamicLayout
              exact
              path="/adminretrieveshowseatingsbyshownumberandstatus"
              component={AdminViewShowSeatingsByShowNumberAndStatus}
              layout="PHOTO10_PAGE"
            />
            <DynamicLayout
              exact
              path="/adminsetupshow"
              component={AdminSetupShow}
              layout="PHOTO10_PAGE"
            />
            <DynamicLayout
              exact
              path="/buyer"
              component={Buyer}
              layout="PHOTO10_PAGE"
            />
            <DynamicLayout
              exact
              path="/buyerretrieveavailableseatingsbyshownumber"
              component={BuyerRetrieveAvailableSeatingsByShowNumber}
              layout="PHOTO10_PAGE"
            />
            <DynamicLayout
              exact
              path="/buyerbookseats"
              component={BuyerBookSeats}
              layout="PHOTO10_PAGE"
            />
            <DynamicLayout
              exact
              path="/buyercancelticket"
              component={BuyerCancelTicket}
              layout="PHOTO10_PAGE"
            />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
