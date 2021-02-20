import { Button, Col, Result, Row } from "antd";
import React, { useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { AuthenticationSignIn } from "./components";
export type Props = {};

export const Authentication = (props: Props) => {
  const { pathname } = useLocation(),
    { path } = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Row>
      <Col span={24}>
        <Switch>
          <Route exact path={`${path}`}>
            <Redirect exact from={`/`} to={`${path}/sign-in`} />
          </Route>
          <Route exact path={`${path}/sign-in`} component={AuthenticationSignIn} />
          <Route path={`${path}/sign-up`} component={() => <div></div>} />
          <Route
            render={(props) => {
              return (
                <Result
                  status="403"
                  title="403"
                  subTitle="Sorry, you are not authorized to access this page."
                  extra={<Button type="primary">Back Home</Button>}
                />
              );
            }}
          ></Route>
        </Switch>
      </Col>
    </Row>
  );
};
