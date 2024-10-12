import { createContext, useState } from "react"
import { data } from '../utils/chatdata.json'
import userdata from '../utils/user';

export const AppContext = createContext();

const DataContext = ({ children }) => {

    const [page, setpage] = useState(0);

    const [profile, setProfile] = useState({
        "name": "Joe Mayers",
        "last_online": "3 min ago",
        "headline": "Lorem ipsum dolor sit, amet...",
        "position": "Account Manager",
        "profile_pic": "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    });

    const [chat, setchat] = useState("");

    const [message, setmessage] = useState(data);

    let active = new Array(userdata.length).fill(false);
    active[0] = true;

    const [activechat, setactivechat] = useState(active);

    return (
        <AppContext.Provider value={{ page, setpage, chat, setchat, profile, setProfile, message, setmessage, data, activechat, setactivechat }}>
            {children}
        </AppContext.Provider>
    )
}

export default DataContext