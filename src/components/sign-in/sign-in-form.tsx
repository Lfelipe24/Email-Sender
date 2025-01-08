"use client";
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { formValues } from "@/types/auth/sign-in/form";
import { useRouter } from "next/navigation";
import { signIn } from "@/services/auth/sign-in"

export const SignInForm = () => {
    const router = useRouter()
    const [messageService, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false);

    const onSubmit = async ({ email, password }: formValues) => {
        try {
            setLoading(true);
            if (!email || !password) return

            const response = await signIn({ email: email, password: password })
            if (response && response.status === 200) {
                messageService.success("login Success!");
                router.push("/home/dashboard");
            } else {
                messageService.error("Incorrect User or Password");
            }
        } catch (error) {
            messageService.error("Error with login service");
        } finally {
            setLoading(false);
        }
    };
    return (
        <Form
            name="sign-in-form"
            onFinish={onSubmit}
            autoComplete="off"
            className="flex flex-col justify-center items-center min-w-[377px]"
        >
            {contextHolder}
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
                <Input
                    className="!rounded-2xl !h-10"
                    placeholder="Email"
                    prefix={
                        <div className="mr-2">
                            <MailOutlined className="!text-gray-400 !text-base" />
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
                <Input.Password
                    className="!rounded-2xl !h-10"
                    placeholder="Password"
                    prefix={
                        <div className="mr-2">
                            <LockOutlined className="!text-gray-400 !text-base" />
                        </div>
                    }
                />
            </Form.Item>
            <Button
                className="w-full !bg-blue-900 !text-base !h-10 !rounded-2xl"
                type="primary"
                htmlType="submit"
                loading={loading}
            >
                Login
            </Button>
        </Form>
    );
};
