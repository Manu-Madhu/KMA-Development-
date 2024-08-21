import React from 'react'

const LoginPage = () => {
  return (
    <div className='mt-40 mb-40'>
      
<form className="max-w-sm mx-auto">
<h1 className='text-3xl text-black-600 text-center mb-2'>Log in to your account</h1>
      <h4 className='text-sm text-center opacity-80 mb-4'>Welcome back! Please enter your details.</h4>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-xs text-black-500  ">Username</label>
    <input type="email" id="email" className=" border border-[#D7D7D7] text-gray-900 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
       placeholder="Enter Your Username" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-xs text-black-500 ">Password</label>
    <input type="password" id="password" className=" border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>

    <label htmlFor="remember" className="ms-2 mr-32 text-xs opacity-80 pt-0.8 ">
      Remember for 30 days</label>
    <span className='text-primaryColor font-bold text-xs'>Forgot password</span>
    
  </div>
  <button type="submit" className="text-white  bg-primaryColor mb-6  focus:ring-4 
  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full 
   px-5 py-2.5 text-center ">Sign in</button>
   <div className='flex flex-row gap-2'>
   <h6 className='text-xs opacity-80 ml-20'>Don’t have an account?</h6>
   <h6 className='text-primaryColor text-center text-xs font-bold'>Sign up</h6>
   </div>
</form>


    </div>
  )
}

export default LoginPage