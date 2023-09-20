import React from 'react'

const Input = ({value,placeholder,type,id, name,onChange}) => {
  return (
    <div>
      <input value={value} className='h-10 w-full border rounded-md p-2 mt-2 outline-none bg-slate-50' placeholder={placeholder} type={type} id={id} name={name} onChange={onChange}></input>
    </div>
  )
}

export default Input
