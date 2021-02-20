import { Button, Col, Menu, Result, Row } from "antd";
import React, { useEffect } from "react";
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";

import { AuthenticationSignIn, AuthenticationSignUp } from "./components";
export type Props = {};
const { SubMenu } = Menu;

export const Authentication = (props: Props) => {
  const { pathname } = useLocation(),
    { path } = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Row>
      <Col span={24}>
        <Menu selectedKeys={[pathname]} mode="horizontal" theme="dark">
          <Menu.Item key={`${path}/sign-in`} icon={<LoginOutlined />}>
            <NavLink to={"./sign-in"}>تسجيل الدخول</NavLink>
          </Menu.Item>
          <Menu.Item key={`${path}/sign-up`} icon={<UserAddOutlined />}>
            <NavLink to={"./sign-up"}>التسجيل </NavLink>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route exact path={`${path}`}>
            <Redirect exact from={`/`} to={`${path}/sign-in`} />
          </Route>
          <Route
            exact
            path={`${path}/sign-in`}
            component={AuthenticationSignIn}
          />
          <Route
            exact
            path={`${path}/sign-up`}
            component={AuthenticationSignUp}
          />
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
