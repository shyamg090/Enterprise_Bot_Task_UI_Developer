import { useContext, useEffect, useState } from 'react';
import cross from '../assets/cross.svg';
import { AppContext } from '../Context/DataContext';
import UserChats from './UserChats';

const RightChats = () => {

    const { setpage, chat, setchat, profile, message, setmessage, data } = useContext(AppContext);

    const { name, last_online, headline, position, profile_pic } = profile;


    const handlechat = (e) => {
        setchat(e.target.value);
    }

    const changepage = () => {
        setpage(0);
    }

    const [count , setcount] = useState(1);

    const sendData2 = (count) => {

        const updatedData = { ...data };
        updatedData.chat1[count].msg.message = chat;
        setchat('')

        setmessage(updatedData);

        setTimeout(()=>{
            updatedData.chat1[count+1].msg.message = "Sure! I will definitely help you with your query. Could you please confirm your email address?";
            setmessage(updatedData);
            setcount(3);
        },1000);
  
    }

    return (
        <div className='flex flex-col justify-between h-[100vh] lg:w-[70%]'>

            <div className='flex flex-col'>
                <div className='flex justify-between text-title '>
                    <div className='flex items-start justify-start  p-4'>
                        <h1 className='uppercase '>chat sessions</h1>
                    </div>
                    <img src={cross} className='mr-4 cursor-pointer ' onClick={changepage}></img>
                </div>

                <div className="flex items-center justify-between p-4 border-b-[2px] border-b-gray-100 sticky top-0">

                    <div className='h-[4rem] w-[4rem] rounded-full bg-cover bg-center flex flex-col items-end justify-end' style={{ backgroundImage: `url( ${profile_pic} )` }}>
                        <div className='w-[.8rem] h-[.8rem] bg-[#5EE2A0] rounded-full'></div>
                    </div>

                    <div className="flex flex-col w-[90%] leading-[.7rem] p-1">
                        <div className="flex items-center justify-between p-2">
                            <h1 className="text-name">{name}</h1>
                        </div>
                        <h3 className="p-2">{position}</h3>
                    </div>

                </div>
            </div>

            <div className='w-full h-full flex flex-col items-start justify-start gap-4'>
                <UserChats data={message} />
            </div>

            <div className='flex border-t-[2px] border-t-gray-100 lg:p-8'>
                <div className='w-[100%] flex bg-gray-100 p-6 lg:p-8'>
                    <input type='text' placeholder='Message' className='bg-transparent w-[90%] outline-none' value={chat} onChange={handlechat} ></input>
                    <button className='lg:w-[5vw] lg:h-[5vh] text-title rounded-lg p-2' onClick={()=> sendData2(count)} >send</button>
                </div>
            </div>
        </div>

    )
}

export default RightChats;