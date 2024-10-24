"use client"
import { CardComponent } from '@/components/globals'
import React from 'react'

export default function DashboardPage() {
    return (
      <main className="py-5 px-10 w-full flex flex-row justify-center items-center">
      <section>
      <CardComponent title='Email sender'>
            <h1>Email sender</h1>
        </CardComponent>
      </section>
    </main>

    )
}
