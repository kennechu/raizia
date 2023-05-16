import { FacebookRounded, Instagram, LinkedIn } from '@mui/icons-material'
import { Divider, Stack } from '@mui/material'
import './Footer.css'
import { RaiziaLogo } from '../icons/Icons'

const Footer = () => {
  const data = ['Seguidad', 'Privacidad', 'Términos y condiciones', 'Contacto']

  return (
    <Stack className='flex flex-col gap-2 md:gap-6 bg-secondary-color py-5 px-5 md:py-12 md:px-24'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-4'>
          <FacebookRounded htmlColor='white' />
          <Instagram htmlColor='white ' />
          <LinkedIn htmlColor='white' />
        </div>
        <RaiziaLogo width='120px' />
      </div>
      <Divider orientation='horizontal' flexItem color='white' />
      <div className='flex flex-col gap-2 md:flex-row md:justify-between justify-center items-center'>
        <div className='flex flex-row justify-between gap-4 md:gap-12 md:justify-start text-white'>
          {data.map((item) => (
            <span className='text-xs md:text-sm hover:text-gray-300' key={item}>
              {item}
            </span>
          ))}
        </div>
        <h4 className='text-gray-300 text-xs md:text-sm'>
          © 2023 Raizia Technologies es una empresa registrada
        </h4>
      </div>
    </Stack>
  )
}

export default Footer
