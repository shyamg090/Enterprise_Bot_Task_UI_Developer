import { createContext, useState } from "react"

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

    return (
        <AppContext.Provider value={{ page, setpage, chat, setchat, profile, setProfile }}>
            {children}
        </AppContext.Provider>
    )
}

export default DataContext