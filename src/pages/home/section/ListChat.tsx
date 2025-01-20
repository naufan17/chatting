import React from 'react'

const ListChat: React.FC = () => {
  const chats: { id: number, name: string, message: string, time: string } = [
    { id: 1, name: 'John Doe', message: 'Hey, how are you?', time: '2:30 PM' },
    { id: 2, name: 'Jane Smith', message: 'Let\'s meet up tomorrow.', time: '3:15 PM' },
    { id: 3, name: 'Alex Brown', message: 'Did you finish the project?', time: '4:45 PM' },
    { id: 4, name: 'Alice Johnson', message: 'I\'m still working on it.', time: '5:00 PM' },
    { id: 5, name: 'Bob Williams', message: 'Great job, keep it up!', time: '6:30 PM' },
    { id: 6, name: 'Emily Davis', message: 'I\'m available for an interview.', time: '7:15 PM' },
    { id: 7, name: 'Michael Wilson', message: 'Looking forward to it.', time: '8:00 PM' },
    { id: 8, name: 'Sarah Anderson', message: 'I\'m looking forward to it.', time: '9:30 PM' },
  ]

  return (
    <div className="flex min-h-screen ml-16 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-blue-50">
      <div className='mt-4 space-y-4 w-full'>
        <div className='mx-4'>
          <input 
            type="search" 
            placeholder="Cari" 
            className='w-full px-2 py-1.5 rounded-2xl border bg-blue-100 border-blue-400 text-sm font-sans text-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='flex flex-row mx-2 items-center justify-center space-x-3'>
          <div className='bg-blue-100 px-2 py-0.5 rounded-full border border-blue-400'>
            <span className='text-sm font-sans text-blue-500 font-medium'>
              Semua
            </span>
          </div>
          <div className='bg-blue-100 px-2 py-0.5 rounded-full border border-blue-400'>
            <span className='text-sm font-sans text-blue-500 font-medium'>
              Grup
            </span>
          </div>
          <div className='bg-blue-100 px-2 py-0.5 rounded-full border border-blue-400'>
            <span className='text-sm font-sans text-blue-500 font-medium'>
              Favorite
            </span>
          </div>

        </div>
        <div className='flex flex-col mx-2 items-start'>
          {chats.map((chat) => (
            <div key={chat.id} className='flex flex-row w-full items-center text-gray-800 p-2 rounded-2xl hover:bg-blue-100 duration-100 ease-in-out'>
              <div className='h-12 w-12 rounded-full bg-gray-400'></div>
              <div className='flex flex-col justify-center ml-2 flex-1'>
                <div className='flex justify-between items-center w-full'>
                  <span className='text-sm font-sans text-gray-800 font-medium'>{chat.name}</span>
                  <span className='text-xs font-sans text-gray-700 font-normal'>{chat.time}</span>
                </div>
                <span className='text-sm font-sans text-gray-700 font-normal'>{chat.message}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListChat