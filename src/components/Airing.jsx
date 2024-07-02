import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/Global'
import Sidebar from './Sidebar'

function Airing({rendered}) {
    const {airingAnime ,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'airing'){
            return airingAnime?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }else{
            return searchResults?.map((anime) => {
                return <Link className='h-[400px] rounded-[7px] border-[5px] border-black' to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img className="w-full h-full object-cover rounded-[5px]" src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }
    }

    return (
        <div className='flex'>
            <div className="mt-[2rem] pl-[5rem] py-[2rem] w-full grid grid-cols-autofill-250 gap-2 bg-white border-t-[5px]">
                {conditionalRender()}
            </div>
            <Sidebar />
        </div>
    )
}
export default Airing