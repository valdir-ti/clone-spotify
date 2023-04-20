import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2, Maximize2 } from 'lucide-react'
import Album from './components/Album'
import Card from './components/Card'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">

          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>

          <nav className="flex flex-col space-y-5 mt-10">
            <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Aniversário</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>My Playlist #3</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hits da Internet</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Daily Mix 4</a>
          </nav>

        </aside>
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
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
          <div className='flex items-center gap-3'>
            <Image src='/album.jpg' alt='album' width={56} height={56} />
            <div className='flex flex-col'>
              <strong className='font-normal'>Rope</strong>
              <span className='text-xs text-zinc-400'>Mettalica</span>
            </div>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-6'>
              <Shuffle size={20} className='text-zinc-200'/>
              <SkipBack size={20} className='text-zinc-200'/>
              <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto'>
                <Play />
              </button>
              <SkipForward size={20} className='text-zinc-200'/>
              <Repeat size={20} className='text-zinc-200'/>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-xs text-zinc-500'>0:31</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-32 h-1 rounded-full'></div>
              </div>
              <span className='text-xs text-zinc-500'>2:16</span>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Mic2 size={16} />
            <LayoutList size={16}/>
            <Laptop2 size={16}/>
            <div className='flex items-center gap-2'>
              <Volume2 size={16}/>
              <div className='h-1 rounded-full w-24 bg-zinc-600'>
                <div className='bg-zinc-200 w-12 h-1 rounded-full'></div>
              </div>
            </div>
            <Maximize2 size={16}/>
          </div>
        </footer>
      </div>
    </div>
  )
}
