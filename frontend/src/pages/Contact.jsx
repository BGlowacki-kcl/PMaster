import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref, showNotification) => {
  return (
    <div ref={ref} >Contact</div>
  )
})

export default Contact