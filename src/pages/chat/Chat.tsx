/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Sidebar from '../../components/layout/Sidebar'
import ListChat from './section/ListChat'
import ChatBox from './section/ChatBox'

const Home: React.FC = () => {


  return (
    <>
      <Sidebar />
      <div className="flex ml-14 sm:ml-16">
        <ListChat />
        <ChatBox />
      </div>
    </>
  )
}

export default Home
