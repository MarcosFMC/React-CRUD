import React from 'react'
import './message.css'
function Message({error}) {
  return (
    <div className='error'>{`Error ${error.status}: ${error.statusText}`}</div>
  )
}

export default Message