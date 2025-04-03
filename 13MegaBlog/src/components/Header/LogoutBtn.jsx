import React from 'react'
import { useDispatch } from 'react-redux' 
import authService from '../../appwrite/auth'

function LogoutBtn() {

    const userLogout = () => {
        authService.logout()
            .then(() => {})
            .catch()
            .finally()
    }

  return (
    <div>
        <button 
            className='w-3 h-2 bg-blue-700 text-shadow-white'
            onClick={userLogout}    
        >Logout</button>
    </div>
  )
}

export default LogoutBtn
