import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { photo2 } from '../../photo/photos'

function LogoutBtn() {
    
    const [loading, setLoading] = useState(false);
    
    const dispatch = useDispatch()
    const logoutHandler = async () => {
        setLoading(true);
        try {
          await authService.logout();
          dispatch(logout());
      } catch (error) {
          console.error('Logout failed', error);
      } finally {
          setLoading(false);
      }
    }
  return (
    <div>
      <button
      className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandler}
      disabled = {loading}
      >{loading ? 'logging out ...' : 'Logout'}</button>

      {loading && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 '>
                <img src={photo2} alt="Loding" className='w-24 h-24' />
            </div>
      )}
    </div>
  )
}

export default LogoutBtn