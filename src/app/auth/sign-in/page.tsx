"use client"
import React from 'react'
import { Layout, Card } from "antd"
import { SignInForm } from "@/components/sign-in/sign-in-form"
import { GradientBackgroundComponent } from '@/components/globals'

const { Content } = Layout

export default function SignInPage() {
    return (
        <main>
            <Layout>
                <GradientBackgroundComponent>
                    <Content className='flex justify-center items-center w-full h-[100vh]'>
                        <Card className='!rounded-2xl'>
                            <h1 className="w-full text-center text-xl font-light mb-8">Sign In</h1>
                            <SignInForm />
                        </Card>
                    </Content>
                </GradientBackgroundComponent>
            </Layout>
        </main>
    )
}
