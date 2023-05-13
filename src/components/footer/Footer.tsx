import { FacebookRounded, Instagram, LinkedIn } from '@mui/icons-material'
import { Divider, Stack, Typography } from '@mui/material'
import './Footer.css'

const Footer = () => {
  const data = ['Seguidad', 'Privacidad', 'Términos y condiciones', 'Contacto']

  return (
    <Stack className='footer-content'>
      <div className='section'>
        <div className='social-icons'>
          <FacebookRounded fontSize='large' />
          <Instagram fontSize='large' />
          <LinkedIn fontSize='large' />
        </div>
        <Typography variant='h4' fontWeight={600}>
          RAIZIA
        </Typography>
      </div>
      <Divider orientation='horizontal' flexItem color='white' />
      <div className='section'>
        <div className='social-icons'>
          {data.map((item) => (
            <Typography key={item}>
              {item}
            </Typography>
          ))}
        </div>
        <Typography>
          © 2023 Raizia Technologies es una empresa registrada
        </Typography>
      </div>
    </Stack>
  )
}

export default Footer
