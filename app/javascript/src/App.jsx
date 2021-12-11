import React, { useEffect, useState } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";

import { registerIntercepts } from "./apis/axios";
import EditArticle from "./components/Articles/EditArticle";
import NewArticle from "./components/Articles/NewArticle";
import Dashboard from "./components/Dashboard";
import EndUserInterface from "./components/EndUserInterface";
import Authentication from "./components/EndUserInterface/Authentication";
import Settings from "./components/Settings";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    registerIntercepts();
    initializeLogger();
    setAuthHeaders(setLoading);
  }, []);

  if (loading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/articles/new" component={NewArticle} />
        <Route exact path="/articles/:id/edit" component={EditArticle} />
        <Route path="/settings" component={Settings} />
        <Route path="/authentication" component={Authentication} />
        <Route
          path="/preview"
          component={() => <EndUserInterface key={window.location.pathname} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
