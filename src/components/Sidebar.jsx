import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/Global';


function Sidebar() {
    const {popularAnime} = useGlobalContext()

    const sorted = popularAnime?.sort((a,b) => {
        return b.score - a.score
    })

    return (
        <div className='mt-[2rem] bg-white border-t-4 pr-[5px] pl-[2px]'>
            <h3>Top 5 Popular</h3>
            <div className="flex flex-col w-[100px] rounded-md border-[4px] border-black">
                {sorted?.slice(0,5).map((anime) => {
                    return <Link className='mt-[1rem] flex flex-col gap-[0.4rem] text-color bg-green-500' to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img className="w-full rounded-lg border-[5px] border-black" src={anime.images.jpg.large_image_url} alt="" />
                        <h5 className='text-lg'>
                            {anime.title}
                        </h5>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Sidebar

