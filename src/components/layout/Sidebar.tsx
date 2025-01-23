import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [isSelected] = useState<string>('chat')

  const userProfile: { name: string, profilePicture: string } = {
    name: 'John Doe',
    profilePicture: 'https://res.cloudinary.com/ddpbwjjfz/image/upload/v1706756352/profile/dqfxsphjjtbfwt4v62gv.jpg'
  }

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="relative">
      {isExpanded && <div className="fixed inset-0 bg-black opacity-50 z-10"></div>}
      <nav className={`fixed bg-blue-800 ${isExpanded ? 'w-48' : 'w-14 sm:w-16'} left-0 top-0 min-h-screen duration-500 ease-in-out z-20`}>
        <div className="flex flex-col justify-between min-h-screen">
          <div className="mt-4 space-y-2 ml-1">
            <button onClick={toggleSidebar}>
              <div className="flex items-center px-1 py-2 mx-2 rounded-xl text-white hover:bg-blue-50 hover:text-blue-800 duration-100 ease-in-out">
                <FontAwesomeIcon className="text-md sm:text-xl mx-1.5 sm:mx-2" icon={faBars} />
              </div>
            </button>
              <Link to={'/chat'} className={`flex items-center text-blue-700 px-1 py-2 mx-2 rounded-xl hover:bg-blue-50 hover:text-blue-800 ${isSelected === 'chat' ? 'bg-blue-50 text-blue-700' : ''} duration-100 ease-in-out`}>
                <FontAwesomeIcon className="text-md sm:text-xl mx-1.5 sm:mx-2" icon={faMessage} />
                {isExpanded && <span className="ml-2 text-xs md:text-sm font-sans font-medium">Chat</span>}
              </Link>
              <Link to={'/calls'} className={`flex items-center text-white px-1 py-2 mx-2 rounded-xl hover:bg-blue-50 hover:text-blue-800 ${isSelected === 'calls' ? 'bg-blue-50 text-blue-700' : ''} duration-100 ease-in-out`}>
                <FontAwesomeIcon className="text-md sm:text-xl mx-1.5 sm:mx-2" icon={faPhone} />
                {isExpanded && <span className="ml-2 text-xs md:text-sm font-sans font-medium">Calls</span>}
              </Link>
            </div>
            <Link to={'/profile'} className="flex items-center mx-2 mb-4">
              <img 
                src={userProfile.profilePicture}
                alt="Profile Picture"
                className='w-10 sm:w-11 h-10 sm:h-11 rounded-full hover:ring-1 hover:ring-gray-200 duration-200 ease-in-out'
              />
            {isExpanded && <span className="ml-4 text-xs md:text-sm text-white font-sans font-medium">{userProfile.name}</span>}
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
