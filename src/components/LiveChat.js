import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage'

const LiveChat = () => {
    const dispatch = useDispatch();
    
    const chatMessages=useSelector((store)=> store.chat.messages);

    useEffect(()=>{
        const i =setInterval(()=>{

            dispatch(addMessage({
                name:"Sarang Sharma",
                message:"live chat"
            }));
        },2000);
        return () => clearInterval(i);
    },[]);


  return (
    <div className='w-full h-[480px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll' >
      {chatMessages.map((c, i)=> (
      <ChatMessage key={i} name={c.name} message={c.message}/>
      ))
      }
    </div>
  )
}

export default LiveChat;