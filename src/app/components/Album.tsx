import { Play } from "lucide-react"
import Image from "next/image"

type AlbumProps = {
    title: string
    image: string
    alt: string
}

function Album({title, image, alt}: AlbumProps) {
  return (
    <a href='' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
        <Image src={image} alt={alt} width={104} height={104}/>
        <strong>{title}</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play />
        </button>
    </a>
  )
}

export default Album