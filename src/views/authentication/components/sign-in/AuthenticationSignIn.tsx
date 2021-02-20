import { Button, Checkbox, Col, Form, Input, PageHeader, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, RouteComponentProps, useHistory } from "react-router-dom";
import { CONFIG } from "../../../../constants";
import "./AuthenticationSignIn.less";

type Props = {} & RouteComponentProps;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { md: { offset: 8, span: 8 } },
};

const i18nSuffix = "Authentication.SignIn.";

export const AuthenticationSignIn = (props: Props) => {
  const { t } = useTranslation();
  let history = useHistory();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    history.push("/app");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row className="authentication-sign-in default-padding">
      <Col span={24}>
        <PageHeader
          title={<h1 className="title">{t(i18nSuffix + "PageTitle")}</h1>}
        ></PageHeader>{" "}
      </Col>
      <Col span={24} className="text-align-center">
        <img className="logo" src={CONFIG.LOGO} alt="logo"></img>
      </Col>
      <Col span={24} className="login-wrapper">
        <Form
          layout="horizontal"
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          labelAlign="right"
          size="large"
        >
          <Form.Item
            label={t(i18nSuffix + "Email")}
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t(i18nSuffix + "Password")}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>{t(i18nSuffix + "RememberMe")}</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              {t(i18nSuffix + "PageTitle")}
            </Button>
          </Form.Item>
          <Row justify="center">
            <span>
              {t(i18nSuffix + "Sign-up-request")}
              <Link to={"./sign-up"}>
                <Button type="link" htmlType="submit">
                  {t(i18nSuffix + "Sign-up-btn")}
                </Button>
              </Link>
            </span>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
