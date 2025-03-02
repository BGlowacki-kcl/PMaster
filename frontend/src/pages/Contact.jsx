import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref, showNotification) => {
  return (
    <div ref={ref} className="h-screen" >
      Contact
    </div>
  )
})

export default Contact