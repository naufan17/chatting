import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [isSelected, setIsSelected] = useState<string>('chat')

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <nav className={`fixed bg-blue-800 ${isExpanded ? 'w-48' : 'w-16'} left-0 top-0 min-h-screen duration-500 ease-in-out`}>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="mt-4 space-y-2 ml-1">
          <button onClick={toggleSidebar}>
            <div className="flex items-center px-1 py-2 mx-2 rounded-xl text-white hover:bg-blue-50 hover:text-blue-800 duration-100 ease-in-out">
              <FontAwesomeIcon className="text-xl mx-2" icon={faBars} />
            </div>
          </button>
          <Link to={'/home'} className={`flex items-center text-white px-1 py-2 mx-2 rounded-xl hover:bg-blue-50 hover:text-blue-800 ${isSelected === 'chat' ? 'bg-blue-50 text-blue-800' : ''} duration-100 ease-in-out`}>
            <FontAwesomeIcon className="text-xl mx-2" icon={faMessage} />
            {isExpanded && <span className="ml-2 text-xs md:text-sm font-sans font-medium">Chat</span>}
          </Link>
          <Link to={'/calls'} className={`flex items-center text-white px-1 py-2 mx-2 rounded-xl hover:bg-blue-50 hover:text-blue-800 ${isSelected === 'calls' ? 'bg-blue-50 text-blue-800' : ''} duration-100 ease-in-out`}>
            <FontAwesomeIcon className="text-xl mx-2" icon={faPhone} />
            {isExpanded && <span className="ml-2 text-xs md:text-sm font-sans font-medium">Calls</span>}
          </Link>
        </div>
        <Link to={'/profile'} className="flex items-center text-white px-1 py-2 mx-2 rounded-xl hover:bg-blue-50 hover:text-blue-800 duration-100 ease-in-out">
          <FontAwesomeIcon className="text-xl mx-2" icon={faUser} />
          {isExpanded && <span className="ml-2 text-xs md:text-sm font-sans font-medium">Profile</span>}
        </Link>
      </div>
    </nav>
  )
}

export default Sidebar
