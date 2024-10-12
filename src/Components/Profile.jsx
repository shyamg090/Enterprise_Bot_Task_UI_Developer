import { useContext } from "react";
import { AppContext } from "../Context/DataContext";

const Profile = ({data}) => {

    const {name, last_online, headline, position, profile_pic} = data;

    const { page, setpage, setProfile } = useContext(AppContext);

    const changepage = ()=>{
        setProfile(data)
        setpage(1);
    }

    return (
        <div className="flex items-center justify-between p-4 cursor-pointer" onClick={changepage} >
            <div className='h-[4rem] w-[4rem] rounded-full bg-cover bg-center' style={{backgroundImage: `url(${profile_pic})` }}>
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

{/*         <div className='w-full min-h-[3.5rem] bg-cover bg-center flex items-end rounded-lg' style={{ backgroundImage: `url(${img})` }}>*/}

export default Profile;