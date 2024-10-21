"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { formValues } from "@/types/auth/sign-in/form"

export const SignInForm = () => {
    const onSubmit = ({ email, password }: formValues) => {
        console.log("email", email);
        console.log("password", password);
    };
    return (
        <Form name="sign-in-form" onFinish={onSubmit} autoComplete="off" className="flex flex-col justify-center items-center min-w-[377px]">
            <Form.Item<formValues>
                className="w-full"
                name={"email"}
                rules={[
                    { type: "email", message: "Please input a valid email" },
                    {
                        required: true,
                        message: "Please fill the email",
                    },
                ]}

            >
                <Input placeholder="Email" prefix={
                    <div className="mr-2">
                        <MailOutlined />
                    </div>
                }
                />
            </Form.Item>
            <Form.Item<formValues>
                className={"w-full"}
                name={"password"}
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                ]}
            >
                <Input.Password placeholder="Password" prefix={<div className="mr-2"><LockOutlined /></div>} />
            </Form.Item>
            <Button className="w-full" type="primary" htmlType="submit">Login</Button>
        </Form>
    );
};
