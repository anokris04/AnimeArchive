import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/Global'
import Sidebar from './Sidebar'

function Airing({rendered}) {
    const {airingAnime ,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'airing'){
            return airingAnime?.map((anime) => {
                return <Link className='h-[400px] rounded-lg border-4 border-black' to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img className="w-full h-full object-cover rounded-md" src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }else{
            return searchResults?.map((anime) => {
                return <Link className='h-[400px] rounded-lg border-4 border-black' to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img className="w-full h-full object-cover rounded-md" src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }
    }

    return (
        <div className='flex justify-center gap-20'>
            <div className="mt-8 py-8 px-8 w-[70%] grid grid-cols-autofill-250 gap-8 bg-emerald-800 border-4 border-black rounded-xl">
                {conditionalRender()}
            </div>
            <Sidebar />
        </div>
    )
}
export default Airing