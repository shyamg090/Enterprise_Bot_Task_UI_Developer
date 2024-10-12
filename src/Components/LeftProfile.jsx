import { useState } from 'react';

import search from '../assets/search.svg';
import filter from '../assets/filter.svg';
import Profile from './Profile';

import users from '../utils/user';

const LeftProfile = () => {

    const [filter1, setfilter1] = useState(users);

    const [show, setshow] = useState(false);

    const handleSearch = (e) => {
        // setsearch(e.target.value);
        const value = e.target.value.toLowerCase();

        const filtered = users.filter((item) => {
            return item.name.toLowerCase().startsWith(value);
        });

        setfilter1(filtered);
    };

    const showFilter = () => {
        setshow(!show)
    }

    const handleFilter = (e) => {
        if (e.target.checked) {

            const value = e.target.name;
            // console.log(e);

            const filtered = users.filter((item) => {
                return item.position.toLowerCase() == value.toLowerCase();
            });

            setfilter1(filtered);

            return;
        }

        setfilter1(users);

    };

    return (
        <div className='lg:w-[30%] h-[100vh] overflow-y-scroll'>

            <div className='flex flex-col sticky top-0'>

                <div className='flex items-start justify-start text-title p-4'>
                    <h1 className='uppercase '>chat sessions</h1>
                </div>

                <div className='flex items-center justify-between p-4 bg-white'>
                    <div className='w-[85%] flex items-center justify-start gap-4 border-[1px] border-gray-100 p-3'>
                        <img src={search}></img>
                        <input type='text' placeholder='Search here' className=' outline-none border-none w-full' onChange={handleSearch} />
                    </div>
                    <div className={`flex items-center justify-center w-[3rem] h-[3rem] cursor-pointer p-1 rounded-full ${show ? 'bg-[#c7faff]' : 'bg-white'}`} onClick={showFilter}>
                        <img className='w-[1.2rem]' src={filter}></img>
                    </div>
                </div>

                {
                    show && <div className='w-[50vw] lg:w-[13vw] absolute top-[8rem] right-0 lg:right-6 bg-white text-[1rem] '>
                        <div className='flex items-center justify-start gap-4 p-2 border-b-[1px] border-b-gray-100'>
                            <input type='checkbox' name='UI Developer' onChange={handleFilter}></input>
                            <label>UI Developer </label>
                        </div>
                        <div className='flex items-center justify-start gap-4 p-2 border-b-[1px] border-b-gray-100'>
                            <input type='checkbox' name='Product Designer' onChange={handleFilter}></input>
                            <label>Product Designer </label>
                        </div>
                        <div className='flex items-center justify-start gap-4 p-2 border-b-[1px] border-b-gray-100'>
                            <input type='checkbox' name='Test Engineer' onChange={handleFilter}></input>
                            <label>Test Engineer </label>
                        </div>
                        <div className='flex items-center justify-start gap-4 p-2 border-b-[1px] border-b-gray-100'>
                            <input type='checkbox' name='HR' onChange={handleFilter}></input>
                            <label>HR </label>
                        </div>
                    </div>
                }

            </div>

            {
                filter1.map((item, id) => {
                    return <Profile key={id} data={item} id={id} />

                })
            }

        </div>
    )
}

export default LeftProfile;