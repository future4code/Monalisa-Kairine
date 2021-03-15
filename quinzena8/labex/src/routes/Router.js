import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApplicationFormPage from "../screens/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../screens/CreateTripPage/CreateTripPage";
import HomePage from "../screens/HomePage/HomePage";
import ListTripsPage from "../screens/ListTripsPage/ListTripsPage";
import TripDetailsPage from "../screens/TripDetailsPage/TripDetailsPage";
import LoginPage from "../screens/LoginPage/LoginPage";
import AdmTripsPage from "../screens/AdmPage/AdmPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/loginPage">
          <LoginPage />
        </Route>
        <Route exact path="/adm">
          <AdmTripsPage />
        </Route>
        <Route exact path="/application-form/:id">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/ListTripsPage">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trip-details">
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;