import React from 'react'
import { Form, Button, Input } from "antd"
import { CardComponent } from '../globals'
import { EmailSenderFormType } from "@/types/dashboard/email-sender"
import { SendOutlined } from '@ant-design/icons'

const { TextArea } = Input

export const EmailSender = () => {
    const onFinish = () => {
        console.log('submit')
    }
    return (
        <CardComponent title='Send New Email'>
            <Form name='senderEmailForm' onFinish={onFinish} layout='vertical'>
                <Form.Item<EmailSenderFormType>
                    label={"From:"}
                    name={"from"}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item<EmailSenderFormType>
                    label={"To:"}
                    name={"to"}
                    rules={[{ required: true, type: "email", message: "The email is not valid" }]}
                >
                    <Input placeholder='Email' />
                </Form.Item>
                <Form.Item<EmailSenderFormType>
                    label={"Cc:"}
                    name={"cc"}
                    rules={[{ required: false, type: "email", message: "The email is not valid" }]}
                >
                    <Input placeholder='Cc' />
                </Form.Item>
                <Form.Item<EmailSenderFormType>
                    label={"Subject:"}
                    name={"subject"}
                >
                    <Input placeholder='subject' />
                </Form.Item>
                <Form.Item<EmailSenderFormType>
                    name={"body"}
                >
                    <TextArea placeholder='Type your message!' className='!resize-none !h-[300px]' />
                </Form.Item>
                <Button className='!h-10' type='primary' icon={<SendOutlined />} htmlType='submit'>Send</Button>
            </Form>
        </CardComponent>
    )
}
