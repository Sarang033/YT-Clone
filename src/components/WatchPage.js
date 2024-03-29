import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';


const WatchPage = () => {

  const [searchParams]=useSearchParams();
 

  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(closeMenu())
  }, []);
  return (
    <div className='flex-column w-full'>
    <div className='px-5 flex '>
      <div>
      <iframe width="880"
      height="480"
      src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen>
      </iframe>
      </div>
      <div className='w-full'>
      
      </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage;
