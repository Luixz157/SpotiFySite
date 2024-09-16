import { Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume1, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
    return(
      <footer className="fixed w-full h-auto bottom-0 bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className='' >
          <div  className='flex items-center gap-3'>
            <Image className='w-full rounded' src="/Musica1.png" alt="Musicas" width={74} height={74}/>
            <div className='flex flex-col gap-1' >
              <strong className='font-normal'>Testing</strong>
              <span className='text-xs text-zinc-400'>LuizinhoDaGaiole</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-6'>
              <Shuffle className='size-5 text-zinc-200' />
              <SkipBack className='size-5 text-zinc-200' />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto'>
                <Image className='p-1' src={"/IconPlay.png"} alt='Play' width={25} height={25} />
              </button>
              <SkipForward className='size-5 text-zinc-200' />
              <Repeat className='size-5 text-zinc-200' />
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-xs text-zinc-400' >0:31</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
              </div>
              <span className='text-xs text-zinc-400' >2:21</span>
            </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20} />
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center gap-2'>
            <Volume1 size={20}/>
            <div className='h-1 rounded-full w-20 bg-zinc-600'>
                <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
              </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
    )
}