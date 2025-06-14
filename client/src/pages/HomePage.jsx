import React, { useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import ChatContainer from '../components/ChatContainer.jsx'
import RightSidebar from '../components/RightSidebar.jsx'

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
      <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid grid-cols-1 relative ${
        selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'
      }`}>
        <Sidebar selecteduser={selectedUser} setSelecteduser={setSelectedUser} />
        <ChatContainer selecteduser={selectedUser} setSelecteduser={setSelectedUser} />
        <RightSidebar selecteduser={selectedUser} setSelecteduser={setSelectedUser} />
      </div>
    </div>
  )
}

export default HomePage
