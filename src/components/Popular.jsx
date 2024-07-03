import React from 'react'
import { useGlobalContext } from '../context/Global'
import { Link } from 'react-router-dom';




const Popular = () => {
  const {popularAnime, isSearch} = useGlobalContext();

  const conditionalRender = () => {
    if(!isSearch){
      return popularAnime.map((anime)=>{
        return <Link className="h-[400px] rounded-lg border-4 border-black" to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
          <img className="w-full h-full object-cover rounded-md" src={anime.images.jpg.large_image_url}/>
        </Link>
      })
    }
  }


  return (
    <div className='flex justify-center'>
      <div className='mt-8 py-8 px-8 w-[80%] grid grid-cols-autofill-250 gap-8 bg-emerald-800 border-4 border-black rounded-xl'>
        {conditionalRender()}
      </div>
    </div>
  )
}

export default Popular
