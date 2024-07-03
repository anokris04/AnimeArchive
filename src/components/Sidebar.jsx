import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/Global';


function Sidebar() {
    const {popularAnime} = useGlobalContext()

    const sorted = popularAnime?.sort((a,b) => {
        return b.score - a.score
    })

    return (
        <div className='flex flex-col h-[50%] justify-start items-center mt-8 bg-emerald-800 border-4 border-black rounded-lg '>
            <h3 className='text-lg font-semibold px-4 py-2 text-yellow-100'>Top 5 Popular</h3>
            <div className="flex flex-col w-[200px] p-2 border-black">
                {sorted?.slice(0,5).map((anime) => {
                    return <Link className='flex flex-col gap-2 text-lime-400' to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img className="w-full h-full rounded-md border-4 border-black object-cover" src={anime.images.jpg.large_image_url} alt="" />
                        <h5 className='text-lg p-2'>
                            {anime.title}
                        </h5>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Sidebar

