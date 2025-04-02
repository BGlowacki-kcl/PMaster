import React from 'react'

const AuthForm = () => {
  return (
    <div className='w-2/5'>
        <form className="bg-secondarysky1 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Welcome to Krono</h2>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div className="flex items-center justify-between">
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Sign In
            </button>
            </div>
        </form>
    </div>
  )
}

export default AuthForm