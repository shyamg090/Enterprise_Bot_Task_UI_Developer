import { useContext } from "react";
import { AppContext } from "../Context/DataContext";
import chatdata from '../utils/chatdata.json'

const Profile = ({ data , id }) => {

    const { name, last_online, headline, position, profile_pic } = data;

    const { setpage, setProfile, activechat, setactivechat} = useContext(AppContext);

    const changepage = () => {
        setProfile(data);
        setactivechat((prev)=>{
            return prev.map((value,index)=>{
                return index == id
            })
        })
        setpage(1);
    }

    return (
        <div className={`flex items-center justify-between p-4 cursor-pointer ${activechat[id] ? 'bg-[#F5F6FA]' : 'bg-white'}`} onClick={changepage} >
            <div className='h-[4rem] w-[4rem] rounded-full bg-cover bg-center' style={{ backgroundImage: `url(${profile_pic})` }}>
            </div>
            <div className="flex flex-col w-[90%] leading-[1rem] p-1">
                <div className="flex items-center justify-between p-2">
                    <h1 className="text-name">{name}</h1>
                    <h2 className="text-time">{last_online}</h2>
                </div>
                <h3 className="p-2">{headline}</h3>
            </div>
        </div>
    )
}


export default Profile;