import { Typography } from '@mui/material'
import { RaiziaLogo } from '../icons/Icons'

const FooterSteps = () => {
  return (
    <div className='border-t-2 border-gray-500 flex flex-row justify-between h-20 w-11/12 absolute bottom-0 items-center px-6'>
      <RaiziaLogo color='gray' width='120px' />
      <div className='flex flex-row gap-10 items-center justify-center'>
        <Typography variant='h6' className='text-gray-500'>
          Ayuda
        </Typography>
        <Typography variant='h6' className='text-gray-500'>
          Contacto
        </Typography>
      </div>

    </div>
  )
}

export default FooterSteps
