"use client"
import React from 'react'
import { Layout } from "antd"

const { Header, Content, Footer } = Layout

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  };
  
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
  };
  
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };

export default function DashboardPage() {
    return (
        <main>
            <Layout className='overflow-hidden w-full h-[100vh]'>
                <Header className='!bg-blue-900 !text-white text-center'>Header</Header>
                <Content className='flex items-center justify-center'>
                    Email Sender!
                </Content>
                <Footer className='!bg-blue-900 !text-white text-center'>Footer</Footer>
            </Layout>
        </main>
    )
}
