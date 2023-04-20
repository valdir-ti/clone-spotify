import { Play } from "lucide-react"

type PlayButtonProps = {
  type: string,
}

function PlayButton({type}: PlayButtonProps) {
  return (
    <button
      className={`
        ${type === 'card' ? 'absolute top-[72px] right-0' : ''}
        w-12
        h-12
        flex
        items-center
        justify-center
        pl-1
        rounded-full
      bg-green-400
      text-black
        ml-auto
        mr-8
        invisible
        group-hover:visible
      `}>
        <Play />
    </button>
  )
}

export default PlayButton