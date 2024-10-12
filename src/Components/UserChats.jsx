// import { data } from '../utils/chatdata.json'

const UserChats = ({data}) => {
    return (
        <div className='flex flex-col  gap-4 p-6 h-full overflow-y-scroll'>
            {
                data.chat1.map((item, id) => {

                    if (id % 2 == 0) {
                        return <div key={id} className='w-full flex items-center justify-start'>
                            <h1 className='w-[60%] bg-gray-100 p-4 text-[1rem] rounded-tr-md rounded-tl-md rounded-br-md'> {item.msg.message}</h1>
                        </div>
                    } else {
                        return <div key={id} className='w-full flex items-center justify-end'>
                            {
                                item.msg.message.length !== 0 && <h1 className='w-[70%] text-title p-4 text-[1rem] rounded-tr-md rounded-tl-md rounded-bl-md'> {item.msg.message}</h1>
                            }
                        </div>
                    }

                })
            }

        </div>
    )
}

export default UserChats