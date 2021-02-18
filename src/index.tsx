import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import moment from "moment";
import i18next from "i18next";
import I18N_AR from "./translation/ar/i18n.json";
import { I18nextProvider } from "react-i18next";
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Authentication } from "./views/authentication";
import { App } from "./views";


i18next.init({
  lng: "",
  debug: true,
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ar: {
      translation: I18N_AR,
    },
  },
});

const MainApp = (props: any) => {
  console.info(
    `RENDER : MainApp ${moment(process.env.BUILD_DATE).format(
      "DD.MM.YYYY-HH:mm"
    )}`
  );
  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect exact from="/" to="/app" />
          </Route>
          <Route path="/app" component={App} />
          <Route path="/authentication" component={Authentication} />
          <Route component={App} />
        </Switch>
      </BrowserRouter>
    </I18nextProvider>
  );
};

ReactDOM.render(<MainApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
