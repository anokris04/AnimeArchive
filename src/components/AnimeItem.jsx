import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const AnimeItem = () => {

    //getting id
    const {id} = useParams();

    //state
    const [anime, setAnime] = useState({});
    const [characters, setCharacters] = useState([]);
    const [showMore, setShowMore] = useState(false);

    //anime object extraction of values
    const {title, synopsis, images, trailer, aired, season, duration, score, scored_by, popularity, status, rating, source} = anime



    // get Anime based on ID
    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
        const data = await response.json();
        setAnime(data.data);
    }


    //get characters
    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`);
        const data = await response.json();
        setCharacters(data.data);
    }


    useEffect(()=>{
        getAnime(id);
        getCharacters(id);
    }, [])

    return (
        <div className='flex justify-center items-center'>
            <div className='py-12 px-14 w-[80%] bg-slate-900'>
                <h1 className='inline-block text-4xl mb-10 cursor-pointer bg-gradient-to-r from-purple-800 to-cyan-600 bg-clip-text text-transparent font-bold'>{title}</h1>
                <div className='bg-green-200 p-8 rounded-2xl border-4 border-gray-400'>
                    <div className="grid grid-cols-2">
                        <div className="image">
                            <img className="rounded-md border-4 border-gray-300" src={images?.jpg.large_image_url} alt="" />
                        </div>
                        <div className="flex flex-col justify-around">
                            <p className='flex gap-4'><span className='font-bold text-black'>Aired:</span><span>{aired?.string}</span></p>
                            <p className='flex gap-4'><span className='font-bold text-black'>Rating:</span><span>{rating}</span></p>
                            <p className='flex gap-4'><span className='font-bold text-black'>Score:</span><span>{score}</span></p>
                            <p className='flex gap-4'><span className='font-bold text-black'>Scored By:</span><span>{scored_by}</span></p>
                            <p className='flex gap-4'><span className='font-bold text-black'>Popularity:</span><span>{popularity}</span></p>
                            <p className='flex gap-4'><span className='font-bold text-black'>Status:</span><span>{status}</span></p>
                            <p className='flex gap-4'><span className='font-bold text-black'>Source:</span><span>{source}</span></p>
                            <p className='flex gap-4'><span className='font-bold text-black'>Season:</span><span>{season}</span></p>
                            <p className='flex gap-4'><span className='font-bold text-black'>Duration:</span><span>{duration}</span></p>
                        </div>
                    </div>
                    <p className="mt-[2rem] text-gray-600 text-xl">
                            {showMore ? synopsis : synopsis?.substring(0,450) + '...'};
                            <button className="bg-transparent border-none outline-none cursor-pointer text-lg text-emerald-600 font-semibold" onClick={()=>{
                                setShowMore(!showMore);
                            }}>{showMore ? 'Show Less' : 'Show More'}</button>
                    </p>
                </div>
                    <div className="title">
                        <h3 className='inline-block text-2xl my-10 cursor-pointer bg-gradient-to-r from-purple-800 to-cyan-600 bg-clip-text text-transparent font-semibold'>Trailer</h3>
                        <div className="flex justify-center items-center">
                            {trailer?.embed_url && 
                                <iframe className='p-4 outline-none border-4 border-gray-300 rounded-lg bg-white'
                                src={trailer?.embed_url} 
                                title="Inline Frame Example"
                                width="800"
                                height="450"
                                frameBorder='0'
                                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
                                allowFullScreen>
                                </iframe>
                            }
                        </div>

                        <h3 className='inline-block text-2xl my-10 cursor-pointer bg-gradient-to-r from-purple-800 to-cyan-600 bg-clip-text text-transparent font-semibold'>Characters</h3>
                        <div className=" grid grid-cols-autofill-150 gap-4 bg-white border-4 border-gray-300 rounded-xl p-4">
                            {characters?.map((character, index)=>{
                                const {role} = character;
                                const {images, name, mal_id} = character.character;
                                return <Link to={`/character/${mal_id}`} key={index}>
                                    <div className='py-[0.4rem] px-[0.6rem] bg-slate-400 transition-all hover:translate-y-1 ease-in-out'>
                                        <img className="w-full" src={images?.jpg.image_url}/>
                                        <h4 className='py-2 text-black'>{name}</h4>
                                        <p className='text-lime-400'>{role}</p>
                                    </div>
                                </Link>
                            })}
                        </div>
                    </div>
            </div>
    </div>
    )
}

export default AnimeItem
