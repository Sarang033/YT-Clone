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
    <div className='flex-column '>
    <div className='px-5'>
      <iframe width="880"
      height="480"
      src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen>
      </iframe>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage;
