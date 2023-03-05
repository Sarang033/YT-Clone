import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)

    const {snippet,statistics} = info;
    const {channelTitle, title, thumbnails,}= snippet;
    const {likeCount, viewCount} = statistics;

  return (
    <div className='p-2 m-2 w-56 shadow-lg'>
      <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}/>
      <ul>
        <li className='font-bold py-1 truncate'>{title}</li>
        <li className='font-normal'>{channelTitle}</li>
        <li className='font-thin text-xs'>{statistics.viewCount % 1000 + "k views"}</li>
    
      </ul>
    </div>
  )
}

export default VideoCard
