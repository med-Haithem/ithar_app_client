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
import { ConfigProvider } from "antd";
import ar_EG from "antd/lib/locale/ar_EG";
import "moment/locale/ar";

i18next.init({
  lng: "ar",
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
    <div
      style={{
        height: "100vh",
      }}
    >
      <I18nextProvider i18n={i18next}>
        <ConfigProvider direction={"rtl"} locale={ar_EG}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Redirect exact from="/" to="/authentication" />
              </Route>
              <Route path="/app" component={App} />
              <Route path="/authentication" component={Authentication} />
              <Route component={Authentication} />
            </Switch>
          </BrowserRouter>
        </ConfigProvider>
      </I18nextProvider>
    </div>
  );
};

ReactDOM.render(<MainApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
