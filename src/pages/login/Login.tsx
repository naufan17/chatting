import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>('')
  const [errorMessage, setErrorMessage] = React.useState<string>('')
  const navigate = useNavigate()

  const handleRedirect = () => {
    if(email === 'jhon@example.com') {
      navigate('/chat')
    } else {
      setErrorMessage('Invalid email')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="relative px-4 py-5 mx-auto w-2/3 lg:max-w-lg md:px-24 lg:px-8 lg:py-10">
        {/* <div className="bg-blue-100 bg-opacity-50 rounded-2xl py-4 px-5 sm:py-8 sm:px-10 border-2 border-gray-100"> */}
          <div className="flex flex-col items-center justify-center max-w-xl my-4 sm:my-6">
            <h2 className="mb-4 sm:mb-6 font-sans text-2xl text-center font-bold leading-none tracking-tight text-gray-800 sm:text-3xl md:text-4xl md:mx-auto">
              Welcome Back 👋
            </h2>
          </div>
          <div className='bg-green-200 border-2 border-green-400 rounded-2xl p-2'>
            <p className='font-sans text-sm sm:text-base text-center font-semibold text-green-700'>
              Sign in to your account using email <span className='font-bold'>jhon@example.com</span> and click Login
            </p>
          </div>
          <div className="mt-8 sm:mt-12 space-y-1 sm:space-y-2">
            <label htmlFor="email" className="font-medium font-sans text-sm sm:text-base text-gray-800">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-blue-300 font-sans text-sm text-blue-800 sm:text-base rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300"
            />
            {errorMessage && (
              <p className='font-sans text-sm sm:text-base text-red-700'>
                {errorMessage}
              </p>
            )}
          </div>
          <div className="flex justify-center mt-8 sm:mt-12">
            <button type="submit" onClick={handleRedirect} className="bg-blue-700 text-white text-sm sm:text-base rounded-2xl w-full py-2 md:py-2.5 font-medium font-sans hover:bg-blue-800 hover:text-blue-100 duration-100 ease-in">
              Login
            </button>
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Login
