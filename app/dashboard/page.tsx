'use client'

import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function UserInfo() {
  const session = useSession()
  const router = useRouter()

  
  if (session.status === 'loading') {
    return <div>Loading...</div>
  }
  if (session.status !== 'authenticated') {
    router.replace('/')
  }

 
  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6'>
        
        <div>
          Email: <span className='font-bold'>{session?.data?.user?.email}</span>
        </div>
      </div>
    </div>
  )
  }

