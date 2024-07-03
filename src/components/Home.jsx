import React, { useState } from 'react'
import Popular from './Popular'
import { useGlobalContext } from '../context/Global';
import Upcoming from './Upcoming'
import Airing from './Airing'

const Home = () => {
  
  
    const {handleSubmit, 
        search, 
        searchAnime,
        handleChange ,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext()
    const [rendered, setRendered] = useState('popular');

  
    const switchComponent = () => {
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }
    return (
    <div className='bg-gradient-to-b from-teal-700 via-emerald-700 to-teal-900'>
      <header className='py-8 px-20 w-[60%] my-0 mx-auto transition-all ease-in-out'>
        <div className="flex items-center justify-center mb-8">
            <h1 className='text-5xl font-bold text-slate-950'>
                {rendered == 'popular' ? 'Popular Anime':
                rendered == 'airing' ? 'Airing Anime': 'Upcoming Anime'}
            </h1>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <div className='filter-btn popular-filter'>
                <button className="flex items-center gap-2 py-1 px-2 outline-none border-2 border-black rounded-lg text-md bg-white hover:bg-slate-400" onClick={()=>{
                    setRendered('popular');
                }}>Popular
                </button>
            </div>
            <form action="" className="relative w-full">
                <div className='relative'>
                <input className="w-full py-1 px-4 border-none outline-none rounded-lg text-[1rem]  border-2 border-gray-900" type='text' placeholder='Search Anime' value={search} onChange={handleChange}></input>
                <button className="flex items-center gap-2 py-1 px-2 outline-none border-2 border-black rounded-lg text-md bg-white hover:bg-slate-400 absolute right-0 top-[50%] translate-y-[-50%]" type='submit' onClick={handleSubmit}>Search</button>
                </div>
            </form>
            <div className='filtr btn airing filter'>
                <button className="flex items-center gap-2 py-1 px-2 outline-none border-2 border-black rounded-lg text-md bg-white hover:bg-slate-400" onClick={()=>{
                    setRendered('airing')
                    getAiringAnime();
                }}>Airing</button>
            </div>
            <div className='filtr btn upcoming filter'>
                <button className="flex items-center gap-2 py-1 px-2 outline-none border-2 border-black rounded-lg text-md bg-white hover:bg-slate-400" onClick={()=>{
                    setRendered('upcoming')
                    getUpcomingAnime()
                }}>Upcoming</button>
            </div>
        </div>
      </header>
      {switchComponent()}*
    </div>
  )
}

export default Home
