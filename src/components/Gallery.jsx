import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/Global';

function Gallery() {
    const {getAnimePictures, pictures} = useGlobalContext()
    const {id} = useParams();

    //state
    const [index, setIndex] = useState(0);

    const handleImageClick = (i) => {
        setIndex(i)
    }


    useEffect(() => {
        getAnimePictures(id)
    }, [id])

    return (
        
        <div className='bg-gradient-to-b from-teal-700 via-emerald-700 to-teal-900 min-h-[100vh] flex flex-col items-center'>

            <div className="absolute top-1 right-8 border-black border-2 rounded-lg p-2 bg-green-300">
                <Link className='font-semibold text-black flex items-center gap-[0.5rem]' to="/">
                    Back to Home
                </Link>
            </div>
            <div className="inline-block p-8 my-[2rem] bg-green-200 rounded-lg border-[5px] border-black relative">
                <img className="width-[250px]" src={pictures[index]?.jpg.image_url} alt="" />
            </div>
            <div className="flex flex-wrap gap-[0.5rem] w-[80%] p-8 border-[5px] bg-green-200 border-black rounded-lg">
                {pictures?.map((picture, i) => {
                    return <div className="image-con" onClick={()=>{
                        handleImageClick(i)
                    }} key={i}>
                        <img className='w-[6rem] h-[6rem] object-cover cursor-pointer border-[3px] rounded-md border-black'
                            src={picture?.jpg.image_url}
                            style={{
                                border: i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                                filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
                                transform: i === index ? 'scale(1.1)' : 'scale(1)',
                                transition: 'all .3s ease-in-out'
                            }}
                            alt="" 
                            />
                    </div>
                })}
            </div>
        </div>
        
    )
}
export default Gallery