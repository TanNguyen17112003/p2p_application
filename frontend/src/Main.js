import React from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate()
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-300'>
      <h1 className='text-[32px] text-red-500 mb-5'>Chào mừng đến hệ thống chia sẻ file P2P của chúng tôi </h1>
       <div className='flex flex-col gap-4 font-bold'>
          <Button
            onClick={() => navigate("/client/login")}
            className='px-5 py-3 bg-white rounded-lg text-black w-[300px]' 
          >Đăng nhập client</Button>
          <Button
            className='px-5 py-3 bg-white rounded-lg text-black'
          >Đăng kí hệ thống</Button>
          <Button
            onClick={() => navigate("/server/login")}
            className='px-5 py-3 bg-black rounded-lg text-white'
          >Đăng nhập server</Button>
      </div>
    </div>
   
  )
}

export default Main