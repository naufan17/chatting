import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ChatBox: React.FC = () => {
  const activeChat = { 
    name: 'John Doe', 
    time: '2:30 PM',
    profilePicture: 'https://res.cloudinary.com/ddpbwjjfz/image/upload/v1706756352/profile/dqfxsphjjtbfwt4v62gv.jpg'
  }
  const messages = [
    {
      id: 1,
      isSender: true,
      content: 'Hello, how are you?',
      time: '2:30 PM',
    },
    {
      id: 2,
      isSender: false,
      content: 'I\'m good, thanks. How about you?',
      time: '2:35 PM',
    },
    {
      id: 3,
      isSender: true,
      content: 'I\'m also doing well. What about you?',
      time: '2:40 PM',
    },
    {
      id: 4,
      isSender: false,
      content: 'I\'m also doing well. What about you?',
      time: '2:40 PM',
    }
  ]

  return (
    <div className='w-full sm:w-1/2 md:w-2/3 lg:w-3/4 bg-blue-100'>
      <div className="flex justify-between items-center p-4 bg-blue-50">
        <div className="flex items-center space-x-3">
          <img 
            src={activeChat.profilePicture} 
            alt="Profile Picture"
            width={44}
            height={44}
            className='rounded-full hover:ring-1 hover:ring-gray-200 duration-200 ease-in-out'
          />
          <div className='flex flex-col'>
            <span className="font-sans font-medium text-sm text-gray-800">
              {activeChat.name}
            </span>
            <span className="font-sans text-xs text-gray-800">
              {activeChat.time}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-4 h-[75vh] p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.isSender ? 'justify-end' : 'justify-start'} w-full`}>
            <div className={`p-2 rounded-2xl ${msg.isSender ? 'bg-blue-300' : 'bg-gray-300'} max-w-sm`}>
              <p className="text-sm font-sans text-gray-800">
                {msg.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4 mx-4">
        <input
          type="text"
          placeholder="Type a message..."
          className='w-full px-2 py-1.5 rounded-2xl border bg-white border-blue-300 text-sm font-sans text-blue-800 focus:ring-2 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:shadow-outline'
        />
        <button className="ml-2 bg-blue-700 text-white px-4 py-1.5 rounded-2xl hover:bg-blue-600 duration-100 ease-in-out">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  )
}

export default ChatBox