import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Homing } from './Homing'

const MainMusics = [
    {
      Image: "/Musica1.png",
      Title: 'XxxTentacion',
      Text: 'Artist'
    },
    {
      Image: "/Musica10.png",
      Title: 'XxxTentacion',
      Text: 'Artist'
    },
    {
      Image: "/Musica9.png",
      Title: 'XxxTentacion',
      Text: 'Artist'
    },
    {
      Image: "/Musica8.png",
      Title: 'XxxTentacion',
      Text: 'Artist'
    },
    {
      Image: "/Musica7.png",
      Title: 'XxxTentacion',
      Text: 'Artist'
    },
    {
      Image: "/Musica6.png",
      Title: 'XxxTentacion',
      Text: 'Artist'
    },
]

const ForYou = [
    {
      Image: "/Musica1.png",
      Title: 'XxxTentacion',
      Text: 'Artist'
    },
    {
      Image: "/Musica5.png",
      Title: 'XxxTentacion',
      Text: 'Artist'
    },
    {
      Image: "/Musica3.png",
      Title: 'XxxTentacion',
      Text: 'Artist'
    },
    {
      Image: "/Musica8.png",
      Title: 'XxxTentacion',
      Text: 'Artist'
    },
    {
      Image: "/Musica6.png",
      Title: 'XxxTentacion',
      Text: 'Artist'
    },
]

export function Main() {
    return(
        <main className="relative h-screen flex-1 px-6 pt-6 pb-36 overflow-y-auto">
            <div className='flex items-center justify-between w-full h-auto sticky top-0 z-50'>
                <div className='flex items-center gap-3'>
                <button className='rounded-full bg-black/40 p-3'>
                    <ChevronLeft/>
                </button>
                <button className='rounded-full bg-black/40 p-3'>
                    <ChevronRight/>
                </button>
                </div>
                <a href='https://www.linkedin.com/in/luiz-antonio-souza-5000a226b/' target='_blank' className='flex flex-row items-center gap-2 bg-black/50 p-3 rounded-full' >
                    <Image className='rounded-full' src="/MySelf.jpg" alt='Minha foto' width={64} height={64}/>
                    <span className='text-base' >Luiz Antônio de Souza</span>
                </a>
            </div>

            <Homing/>

            <h2 className='font-bold text-3xl mt-10'>Good Afternoon</h2>
            <div className='grid grid-cols-3 gap-4 mt-4'>
            {MainMusics.map((item, index)=> (
              <a href='#' key={index} className=' bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group'>
                <Image src={item.Image} alt={item.Title} width={104} height={104}/>
                <strong>{item.Title}</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Image className='p-1' src={"/IconPlay.png"} alt='Play' width={25} height={25} />
                </button>
              </a>
            ))}
            </div>

            <h2 className='font-bold text-3xl mt-10'>Made for you</h2>
            <div className='grid grid-cols-5 gap-4 mt-4'>
              {ForYou.map((item, index) => (
                <a href='/#' className='relative group bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10' key={index}>
                    <Image className='w-full ' src={item.Image} alt={item.Title} width={120} height={120}>
                    </Image>
                    <strong className='font-semibold' >{item.Title}</strong>
                    <span className='text-sm text-zinc-500'>{item.Text}</span>
                    <button className='absolute right-1 bottom-24 w-16 h-16 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible transition-opacity group-hover:visible'>
                      <Image className='p-1' src={"/IconPlay.png"} alt='Play' width={25} height={25} />
                    </button>
                </a>
              ))}
            </div>
            
            <h2 className='font-bold text-3xl mt-10'>Made for you</h2>
            <div className='grid grid-cols-5 gap-4 mt-4'>
              {ForYou.map((item, index) => (
                <a href='/#' className='relative group bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10' key={index}>
                    <Image className='w-full ' src={item.Image} alt={item.Title} width={120} height={120}>
                    </Image>
                    <strong className='font-semibold' >{item.Title}</strong>
                    <span className='text-sm text-zinc-500'>{item.Text}</span>
                    <button className='absolute right-1 bottom-24 w-16 h-16 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible transition-opacity group-hover:visible'>
                      <Image className='p-1' src={"/IconPlay.png"} alt='Play' width={25} height={25} />
                    </button>
                </a>
              ))}
            </div>
        </main>
    )
}