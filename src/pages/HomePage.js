
import React, { useContext } from 'react'
import UserContext from '../utils/UserContext';
const HomePage = () => {
  const {userName} = useContext(UserContext);
  return (
    <div className='h-5/6 flex items-center justify-center'>
    <h1>Welcome {userName} in food store</h1>
        </div>
  )
}

export default HomePage
