import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import BrowseRequests from "./components/BrowseRequests";
import Header from "./components/Header";
import NewRequest from "./components/NewRequest";
import LoginForm from "./components/LoginForm";
import "./App.css";
import MyRequestsPage from "./components/MyRequestsPage";
import { persistLogin } from "./modules/auth";
import getPlace from "./modules/location";
import Notifications from "./components/Notifications";
import { ActionCableProvider } from "actioncable-client-react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPlace(dispatch);
    persistLogin(dispatch);
  }, []);

  return (
    <>
      <ActionCableProvider url="https://localhost:3000/cable">
        {/* <Notifications /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={BrowseRequests}></Route>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/myrequest/newrequest" component={NewRequest} />
          <Route exact path="/myrequest/:page" component={MyRequestsPage} />
        </Switch>
      </ActionCableProvider>
    </>
  );
};

export default App;
