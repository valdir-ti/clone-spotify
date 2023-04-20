import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
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
            <a href='' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" alt="album image" width={104} height={104}/>
              <strong>Ride the lightning</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" alt="album image" width={104} height={104}/>
              <strong>Ride the lightning</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" alt="album image" width={104} height={104}/>
              <strong>Ride the lightning</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" alt="album image" width={104} height={104}/>
              <strong>Ride the lightning</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" alt="album image" width={104} height={104}/>
              <strong>Ride the lightning</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" alt="album image" width={104} height={104}/>
              <strong>Ride the lightning</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

        </main>
      </div>
      <div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
          footer
        </footer>
      </div>
    </div>
  )
}
