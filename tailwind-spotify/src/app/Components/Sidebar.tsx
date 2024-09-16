import { Home as  HomeIcon, Search, Library } from 'lucide-react'
import Image from 'next/image'

const NavBarLeft = [
    {
      Image: "/Musica1.png",
      Title: 'XxxTentacion',
      Text: 'Artist'
    },
    {
      Image: "/Musica2.png",
      Title: 'Jogar LoLzinho',
      Text: 'Artist'
    },
    {
      Image: "/Musica3.png",
      Title: 'Coding Mode',
      Text: 'Artist'
    },
    {
      Image: "/Musica4.png",
      Title: 'PHONK 🏋️',
      Text: 'Artist'
    },
  ]

export function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className="w-3 h-3 bg-white rounded-full"/>
            <div className="w-3 h-3 bg-white rounded-full"/>
            <div className="w-3 h-3 bg-white rounded-full"/>
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white ' >
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white '>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white '>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
            {NavBarLeft.map((item, index) =>(
              <div className='w-full flex flex-row items-center group cursor-pointer' key={index}>
              <Image className='mr-4 rounded-full group-hover:scale-110 duration-500 transition-transform' src={item.Image} alt="Musica 1" width={45} height={35}/>
              <div className=' flex flex-col my-2'>
                <h4 className='text-base text-zinc-200 group-hover:text-white'>{item.Title}</h4>
                <p className='text-sm text-zinc-100 group-hover:text-white'>{item.Text}</p>
              </div>
            </div>
            ))}
           
          </nav>
        </aside>
    )
}