import React, { ChangeEvent, useState } from 'react'
import listChatJson from '../../../../data/ListChat.json';

const ListChat: React.FC = () => {
  const [selectedChat] = useState<string>('Room 1');
  const [listChat] = useState<typeof listChatJson.result>(listChatJson.result);
  const [filteredChats, setFilteredChats] = useState<typeof listChat>(listChat);

  const handleInputChatList = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const filtered = listChat.filter((chat) => chat.name.includes(e.target.value));
    setFilteredChats(filtered);
  }

  return (
    <div className="h-screen w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-blue-50 overflow-y-auto scroll-hidden">
      <div className='mt-6 space-y-4 w-full'>
        <div className='mx-4'>
          <input 
            type="search" 
            placeholder="Cari"
            onChange={handleInputChatList}
            className='w-full px-2 py-1.5 rounded-2xl border bg-blue-100 border-blue-300 text-sm font-sans text-blue-700 focus:ring-2 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:shadow-outline'
          />
          </div>
          <div className='flex flex-row mx-2 items-center justify-center space-x-3'>
            <div className='bg-blue-100 px-2 py-0.5 rounded-full border border-blue-300'>
              <span className='text-sm font-sans text-blue-500 font-medium'>
                Semua
              </span>
            </div>
            <div className='bg-blue-100 px-2 py-0.5 rounded-full border border-blue-300'>
              <span className='text-sm font-sans text-blue-500 font-medium'>
                Grup
              </span>
            </div>
            <div className='bg-blue-100 px-2 py-0.5 rounded-full border border-blue-300'>
              <span className='text-sm font-sans text-blue-500 font-medium'>
                Favorit
              </span>
            </div>
          </div>
          <div className='flex flex-col mx-2 space-y-2 items-start'>
            {filteredChats.map((chat) => (
            <div key={chat.id} className={`flex flex-row w-full items-center text-gray-800 p-2 rounded-2xl ${selectedChat === chat.name ? 'bg-blue-100 text-gray-900' : ''} hover:bg-blue-100 hover:text-gray-900 cursor-pointer duration-100 ease-in-out`} >
              <img 
                src={chat.profileImage} 
                alt="Profile Picture"
                width={44}
                height={44}
                className='rounded-full hover:ring-1 hover:ring-gray-200 duration-200 ease-in-out'
              />
              <div className='flex flex-col justify-center ml-3 flex-1'>
              <div className='flex justify-between items-center w-full'>
                <span className='text-sm font-sans text-gray-800 font-medium'>
                  {chat.name}
                </span>
                <span className='text-xs font-sans text-gray-700 font-normal'>
                  {chat.comments[0].time}
                </span>
              </div>
              <span className='text-sm font-sans text-gray-700 font-normal'>
                {chat.comments[0].message}
              </span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListChat