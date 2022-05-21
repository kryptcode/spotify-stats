import { useRouter } from 'next/router'

const HomeMain = () => {
  const router= useRouter()
  return (
    <div className='w-[90%] mx-auto text-center '>
        <h3 className='text-5xl mb-5 font-semibold text-gray-400'>
        Spotify Stats
        </h3>
        <p className='text-lg mb-12'>
        Choose what you want to see 
        </p>
        <div className='flex flex-col space-y-4 items-center'>
        <button 
          className='home-btn'
          onClick={() => router.push('/top-tracks')}
        >
            Top Tracks
        </button>
        <button 
          className='home-btn'
          onClick={() => router.push('/top-artists')}
        >
            Top Artists
        </button>
        <button 
          className='home-btn'
          onClick={() => router.push('/recently-played')}
        >
            Recently Played
        </button>
        </div>
    </div>
  )
}

export default HomeMain