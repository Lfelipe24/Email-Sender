"use client"
import React from 'react'
import { Layout } from "antd"
import { SignInForm } from "@/components/sign-in/sign-in-form"
import { CardComponent, GradientBackgroundComponent } from '@/components/globals'

const { Content } = Layout

export default function SignInPage() {
    return (
        <main>
            <Layout>
                <GradientBackgroundComponent>
                <Content className='flex justify-center items-center w-full h-[100vh]'>
                    <CardComponent title='¡Welcome!'>
                        <SignInForm />
                    </CardComponent>
                </Content>
                </GradientBackgroundComponent>
            </Layout>
        </main>
    )
}
