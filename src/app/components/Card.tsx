import Image from "next/image"
import PlayButton from "./PlayButton"

function Card() {
  return (
    <a href="/" className="bg-white/5 p-3 relative group rounded-md hover:bg-white/10 flex flex-col gap-2">
        <Image src='/foo_fighters_album.jpg' className="w-full" alt='album image' width={104} height={104}/>
        <strong className="font-semibold">Daily Mix 1</strong>
        <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
        <PlayButton type="card" />
    </a>
  )
}

export default Card