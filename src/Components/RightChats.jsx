import { useContext, useState } from 'react';
import cross from '../assets/cross.svg';
import { AppContext } from '../Context/DataContext';
import UserChats from './UserChats';
import { data } from '../utils/chatdata.json';

const RightChats = () => {

    const { setpage, chat, setchat, profile } = useContext(AppContext);

    const { name, last_online, headline, position, profile_pic } = profile;

    const [message, setmessage] = useState(data);

    const handlechat = (e) => {
        setchat(e.target.value);
    }

    const changepage = () => {
        setpage(0);
    }

    const sendData = () => {
        const updatedData = { ...data }; 
        // console.log(updatedData.chat1[3].msg.message);
        updatedData.chat1[3].msg.message = chat; 
        // console.log(updatedData);
        setmessage(updatedData);
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


            <div className='w-full h-full flex flex-col items-center justify-start gap-4'>
                <UserChats data={message} />
            </div>


            <div className='flex border-t-[2px] border-t-gray-100 lg:p-8'>
                <div className='w-[100%] flex bg-gray-100 p-6 lg:p-8'>
                    <input type='text' placeholder='Message' className='bg-transparent w-[90%] outline-none' onChange={handlechat} ></input>
                    <button className='lg:w-[5vw] lg:h-[5vh] text-title rounded-lg p-2' onClick={sendData} >send</button>
                </div>
            </div>

        </div>

    )
}

export default RightChats;