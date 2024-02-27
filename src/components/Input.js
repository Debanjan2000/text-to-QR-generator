import React from 'react'

function Input({makeQR}) {
    
  return (
    <div>
        <input
            className='input'
            type='text'
            placeholder='Enter data ...'   
            maxLength={300} 
            onChange={makeQR}
        />
    </div>
  )
}

export default Input