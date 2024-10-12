import LeftProfile from './Components/LeftProfile';
import { useContext, useState } from 'react';
import RightChats from './Components/RightChats';
import { AppContext } from './Context/DataContext';

const App = () => {

  const { page } = useContext(AppContext);
  
  const profiles = [<LeftProfile />, <RightChats />]

  return (
    <>

      <div className='hidden lg:flex'>
        <LeftProfile />
        <RightChats />
      </div>

      <div className='lg:hidden'>
        {
          profiles[page]
        }
      </div>
    </>
  )
}

export default App