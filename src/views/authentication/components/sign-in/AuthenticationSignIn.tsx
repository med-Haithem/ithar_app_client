import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { RouteComponentProps } from "react-router-dom";
import { CONFIG } from "../../../../constants";
import "./AuthenticationSignIn.less";

type Props = {} & RouteComponentProps;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const i18nSuffix = "Authentication.SignIn.";

export const AuthenticationSignIn = (props: Props) => {
  const { t } = useTranslation();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row gutter={[0, 16]} className="authentication-sign-in">
      <Col span={24}>
        <h2 className="title">{t(i18nSuffix + "PageTitle")}</h2>
        <Col />
        <Col span={24}>
          <img src={CONFIG.LOGO}></img>
        </Col>
        <Col span={24} className="form-wrapper">
          <Form
            layout="horizontal"
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            labelAlign="right"
          >
            <Form.Item
              label={t(i18nSuffix + "Username")}
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t(i18nSuffix + "Password")}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
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
          </Form>
        </Col>
      </Col>
    </Row>
  );
};
