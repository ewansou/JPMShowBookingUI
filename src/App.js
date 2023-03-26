import React from "react";
import { Router, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Admin from "./components/Admin";
import AdminRetrieveShows from "./components/AdminRetrieveShows";
import Buyer from "./components/Buyer";
import PhotoBoomerang12 from "./components/PhotoBoomerang12";
import PaymentSuccess from "./components/PaymentSuccess";

import DynamicLayout from "./router/DynamicLayout";

import { history } from "./helpers/history";

const App = () => {
  return (
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
            path="/buyer"
            component={Buyer}
            layout="PHOTOGIF12_PAGE"
          />
          <DynamicLayout
            exact
            path="/photoboomerang12"
            component={PhotoBoomerang12}
            layout="PHOTOBOOMERANG12_PAGE"
          />
          <DynamicLayout
            exact
            path="/paymentsuccess"
            component={PaymentSuccess}
            layout="PAYMENTSUCCESS_PAGE"
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
