"use client"
import React from 'react'

import { EmailSender } from "@/components/dashboard/email-sender"
import { EmailHistory } from "@/components/dashboard/email-history"

export default function DashboardPage() {
  return (
    <main className="p-5 w-full flex flex-row justify-center">
      <div className='w-1/2 mx-1'>
        <EmailHistory />
      </div>
      <div className=' w-1/2 mx-1'>
        <EmailSender />
      </div>
    </main>
  )
}