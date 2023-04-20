import { ChevronLeft, ChevronRight} from 'lucide-react'

import Album from './components/Album'
import Card from './components/Card'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-6">

          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>

            <Album title='Ride the lightning' image='/album.jpg' alt='album image'/>
            <Album title='Ride the lightning' image='/album.jpg' alt='album image'/>
            <Album title='Ride the lightning' image='/album.jpg' alt='album image'/>
            <Album title='Ride the lightning' image='/album.jpg' alt='album image'/>
            <Album title='Ride the lightning' image='/album.jpg' alt='album image'/>
            <Album title='Ride the lightning' image='/album.jpg' alt='album image'/>

          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Valdir Silva</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
