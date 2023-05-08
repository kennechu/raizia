interface InputProps {
  label: string
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
  onChange?: React.InputHTMLAttributes<HTMLInputElement>['onChange']
}

const Input: React.FC<InputProps> = ({ label, type = 'email', onChange }) => {
  return (
    <div className='relative w-full'>
      <input
        onChange={onChange}
        type={type}
        id={label}
        className='block px-2.5 pb-2.5 pt-4 w-full text-xl text-gray-900 bg-transparent rounded-lg border-2  border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer py-14' placeholder=' '
      />
      <label htmlFor={label} className=' bg-white absolute text-xl text-gray-900  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>{label}</label>
    </div>
  )
}

export default Input
