import Head from 'next/head'
import Header from '../components/Header'

const topTracks = () => {
  return (
    <div>
        <Head>
            <title>Spotify Stats | Home</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <div className='bg-green-400 h-[1px] w-full mb-24' />

        <div className='w-[90%] mx-auto '>
            <h2 className='text-center text-3xl font-semibold'>
                Tracks(last 4 weeks)
            </h2>
            <div className='flex justify-between'>
                <div className='flex space-x-3'>
                    <p>1</p>
                    <div>
                        <img src="https://i.scdn.co/image/ab67616d00004851b6d713c27625220479563dd5" alt="" className='w-24' />
                    </div>
                </div>
                
                <div>
                    So High
                </div>
                <div>
                    Doja Cat
                </div>
            </div>
        </div>


    </div>
  )
}

export default topTracks