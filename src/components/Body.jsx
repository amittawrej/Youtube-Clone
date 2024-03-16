import Sidebar from './Sidebar';
import Feed from './Feed';
import { Outlet } from 'react-router';

import React from 'react'

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Outlet/>
      </div>
  )
}

export default Body