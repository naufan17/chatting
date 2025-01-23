import React, { useState } from 'react'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import chatBoxJson from '../../../../data/ChatBox.json';

const ChatBox: React.FC = () => {
  const [profileChat] = useState<typeof chatBoxJson.result>(chatBoxJson.result);
  const [comment] = useState<typeof chatBoxJson.result.comments>(chatBoxJson.result.comments);
  const [addedComment, setAddedComment] = useState<typeof chatBoxJson.result.comments>(comment);
  const [message, setMessage] = useState<string>('');

  const handleViewImage = (message: string) => {
    const link = document.createElement('a');
    link.href = message;
    link.download = 'profile-image.png';
    link.click();
  };

  const handleViewVideo = (message: string) => {
    const link = document.createElement('a');
    link.href = message;
    link.download = 'profile-video.mp4';
    link.click();
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setAddedComment([...addedComment, { id: addedComment.length + 1, type: 'text', message: message, isSender: true, time: Date.now().toString() }]);
      setMessage('');
    }
  };

  return (
    <div className='w-0 sm:w-1/2 md:w-2/3 lg:w-3/4 bg-blue-100 overflow-y-auto scroll-hidden'>
      <div className="flex justify-between items-center p-4 bg-blue-50">
        <div className="flex items-center space-x-3">
          <img 
            src={profileChat.profileImage} 
            alt="Profile Picture"
            width={44}
            height={44}
            className='rounded-full'
          />
          <div className='flex flex-col'>
            <span className="font-sans font-medium text-sm text-gray-800">
              {profileChat.name}
            </span>
            <span className="font-sans text-xs text-gray-800">
              {/* {activeChat.time} */}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-4 h-[75vh] p-4 overflow-y-auto">
        {addedComment.map((cmt, index) => (
            <div key={index} className={`flex ${cmt.isSender ? 'justify-end' : 'justify-start'} w-full`}>
            {cmt.type === 'image' && (
              <div className={`p-4 rounded-2xl ${cmt.isSender ? 'bg-blue-300 text-gray-800' : 'bg-gray-300 text-gray-800'}`}>
                <img src={cmt.message} alt="Image" className='w-24 sm:w-36 h-auto rounded-xl' />
                <button type="button" onClick={() => handleViewImage(cmt.message)} className="w-full mt-2 sm:mt-4 bg-gray-700 text-white text-sm px-2 py-1 sm:py-1.5 rounded-xl hover:bg-gray-800 duration-100 ease-in-out">
                  View
                </button>
              </div>
            )}
            {cmt.type === 'video' && (
              <div className={`p-4 rounded-2xl ${cmt.isSender ? 'bg-blue-300 text-gray-800' : 'bg-gray-300 text-gray-800'}`}>
                <video src={cmt.message} controls className='w-48 sm:w-72 h-auto rounded-xl' />
                <button type="button" onClick={() => handleViewVideo(cmt.message)} className="w-full mt-2 sm:mt-4 bg-gray-700 text-white text-sm px-2 py-1 sm:py-1.5 rounded-xl hover:bg-gray-800 duration-100 ease-in-out">
                  View
                </button>
              </div>
            )}
            {cmt.type === 'text' && (
              <div className={`px-4 py-2 rounded-2xl ${cmt.isSender ? 'bg-blue-300 text-gray-800' : 'bg-gray-300 text-gray-800'} max-w-sm`}>
              <p className="text-sm font-sans">
                {cmt.message}
              </p>
              </div>
            )}
            </div>
        ))}
      </div>
      <div className="flex items-center mt-4 mx-4">
        <input
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
          className='w-full px-2 py-1.5 rounded-2xl border bg-white border-blue-300 text-sm font-sans text-blue-600 focus:ring-2 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:shadow-outline'
        />
        <button onClick={handleSendMessage} className="ml-2 bg-blue-700 text-white px-4 py-1.5 rounded-2xl hover:bg-blue-600 duration-100 ease-in-out">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  )
}

export default ChatBox