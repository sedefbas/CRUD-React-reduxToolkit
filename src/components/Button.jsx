import React from 'react'

const Button = ({onClick,btnText}) => {
  return (
    <div>
      <button className='w-full h-10 bg-emerald-500 text-white flex items-center justify-center mt-2 rounded-xl hover:bg-emerald-400' onClick={onClick}>{btnText}</button>
    </div>
  )
}

export default Button
