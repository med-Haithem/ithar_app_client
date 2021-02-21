import React from "react";
import { Form, Input, Button, Select, Row, Col, PageHeader } from "antd";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { CONFIG } from "../../../../constants";
import { useTranslation } from "react-i18next";

const i18nSuffix = "Authentication.SignUp.";

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailFormItemLayout = {
  wrapperCol: { md: { offset: 8, span: 8 } },
};

type Props = {} & RouteComponentProps;

export const AuthenticationSignUp = (props: Props) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  let history = useHistory();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 100 }}>
        <Select.Option value="216">+216</Select.Option>
      </Select>
    </Form.Item>
  );

  return (
    <Row className="default-padding">
      <Col span={24}>
        <PageHeader
          title={<h1 className="title">{t(i18nSuffix + "PageTitle")}</h1>}
        />
      </Col>

      <Col span={24} className="text-align-center">
        <img className="logo" src={CONFIG.LOGO} alt="logo"></img>
      </Col>
      <Col span={24}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          layout="horizontal"
          size="large"
          initialValues={{
            prefix: 216,
          }}
        >
          <Form.Item
            name="email"
            label={t(i18nSuffix + "Email")}
            rules={[
              {
                type: "email",
                message: t(i18nSuffix + "Validation.UnvalidEmail"),
              },
              {
                required: true,
                message: t(i18nSuffix + "Validation.RequiredEmail"),
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label={t(i18nSuffix + "Password")}
            rules={[
              {
                required: true,
                message: t(i18nSuffix + "Validation.RequiredPassword"),
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label={t(i18nSuffix + "ConfirmPassword")}
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: t(i18nSuffix + "Validation.ConfirmPassword"),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    t(i18nSuffix + "Validation.UnmatchedPasswords")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="phone"
            label={t(i18nSuffix + "PhoneNumber")}
            rules={[
              {
                required: true,
                message: t(i18nSuffix + "Validation.RequiredPhoneNumber"),
              },
              {
                pattern: /^[0-9]{8}$/,
                message: t(i18nSuffix + "Validation.PhoneNumberInvalid"),
              },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              {t(i18nSuffix + "PageTitle")}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
