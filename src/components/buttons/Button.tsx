import React from 'react'

const Button = ({ outlined = false, children, ...props }: { outlined?: boolean, children: React.ReactNode }) => {
  return (
    <button {...props} className={`hidden lg:flex lg:flex-row lg:gap-3 lg:items-center lg:justify-center  lg:ml-auto lg:mr-3 py-2 px-4 text-base rounded-sm 'text-secondary-color' font-semibold ${outlined ? 'text-white' : 'bg-primary-color'} ${outlined ? 'border-2' : ''} `}>
      {children}
    </button>
  )
}

export default Button
