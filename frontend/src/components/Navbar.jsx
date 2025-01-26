import React from 'react';

function Navbar() {
  return (
    <div className="sticky flex flex-row jestify-center">
        <div className="relative flex items-center bg-green-500 justify-center h-full left-10">
            hi
        </div>
        <div className="relative flex items-center justify-center bg-blue-500 h-full ml-auto mr-auto left-30">
            hello
        </div>
        <div className="relative flex items-center justify-center h-full bg-green-500 right-10">
            hi
        </div>
    </div>
  )
}

export default Navbar;