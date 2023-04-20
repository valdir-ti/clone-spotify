import Image from "next/image"
import PlayButton from "./PlayButton"

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
        <PlayButton type="album"/>
    </a>
  )
}

export default Album