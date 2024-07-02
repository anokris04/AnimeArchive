import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/Global'

import Sidebar from './Sidebar'

function Upcoming({rendered}) {
    const {upcomingAnime ,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'upcoming'){
            return upcomingAnime?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }else{
            return searchResults?.map((anime) => {
                return <Link className="height-[400px] rounded-lg border-black border-[5px]" to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img className="w-full h-full object-cover rounded-md" src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }
    }

    return (
        <div className='flex'>
            <div className="mt-[2rem] py-[2rem] pl-[5rem] w-full grid grid-cols-autofill-250 gap-8 bg-white border-black border-[5px] rounded-md">
                {conditionalRender()}
            </div>
            <Sidebar />
        </div>
    )
}

export default Upcoming