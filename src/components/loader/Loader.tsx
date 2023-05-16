import { Typography } from '@mui/material'
import { loader } from '../../utils/images'

const Loader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 h-screen px-12 text-center'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <Typography variant='h4' color='gray' fontWeight={600}>
          Buscando el mejor broker para ti
        </Typography>
        <div className="flex space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
        <img src={loader} alt='loader' className='w-72 aspect-square object-contain' />
      </div>
    </div>
  )
}

export default Loader
