import React from 'react'
import { HTML } from '@react-three/drei'

const Loader = () => {
  return (
    <HTML>
        <div className='flex justify-center items-center'>
            <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 roudned-full animate-spin'/>
        </div>
    </HTML>

  )
}

export default Loader