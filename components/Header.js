import { useState } from 'react'
import { useRouter } from 'next/router'
import { ChartSquareBarIcon, LogoutIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { signOut } from "next-auth/react"


const Header = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const router= useRouter()

  return (
    <header className='flex w-[90%] mx-auto justify-between items-center py-3'>
        <h2 
            className='text-2xl flex space-x-2 items-center cursor-pointer'
            onClick={() => router.push('/')}
        >
        <ChartSquareBarIcon className='h-8' />
        <span>
        spotify-stats
        </span>
        </h2>
        <div className='hidden md:flex flex-grow pl-10 space-x-6 py-4'>
        <p 
            className='nav-link'
            onClick={() => router.push('/top-tracks')}
        >
            Top Tracks
        </p>
        <p 
            className='nav-link'
            onClick={() => router.push('/top-artists')}
        >
            Top Artists
        </p>
        <p 
            className='nav-link'
            onClick={() => router.push('/recently-played')}
        >
            Recently Played
        </p>
        </div>

        <div className='md:flex hidden'> 
        <button className='hover:text-red-600 transition duration-200 ease-in' onClick={() => signOut()}>
            <LogoutIcon className='h-8' aria-label='Sign Out' />
        </button>
        </div>

        <div className='flex md:hidden cursor-pointer' onClick={() => setModalOpen(!modalOpen)}>
            {
                modalOpen ? <XIcon className='h-8' /> : <MenuIcon className='h-8' />
            }
        </div>
    </header>
  )
}

export default Header