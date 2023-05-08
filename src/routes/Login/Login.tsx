import { Button, Grid, Typography } from '@mui/material'
import { Link } from 'wouter'
import loginImage from '../../assets/login.png'
import './Login.css'
import { GoogleLogo, RaiziaLogo } from '../../components/icons/Icons'
import Input from '../../components/commons/Input'

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Grid container>
      <Grid item xs={6}>
        <div className='flex flex-col items-start p-16 bg-white h-full gap-8'>
          <Link href='/'>
            <a>
              <RaiziaLogo width='200px' color='#4b4b4b' />
            </a>
          </Link>
          <Typography variant='h1' className='text-4xl font-bold text-center text-gray-700'>
            ¡Bienvenido!
          </Typography>
          <Typography variant='h4' className='text-xl font-bold text-center text-gray-400'>
            Crea una cuenta para comenzar.
          </Typography>
          <div className='w-full flex justify-center items-end'>
            <form className='flex flex-col justify-center items-center py-11 gap-10 w-full' onSubmit={handleSubmit}>
              <Input label='Correo electrónico' type='email' />
              <Input label='Contraseña' type='password' />
              <Link href='/register'>
                <a className='w-full'>
                  <Button type='submit' variant='contained' fullWidth size='large'>Registrarme</Button>
                </a>
              </Link>
            </form>
          </div>
          <div className='flex flex-col items-center gap-10 w-full'>
            <div className='flex w-full justify-center items-center'>
              <div className='w-9/12 h-[1px] bg-gray-300' />
              <div className='w-4/6'>
                <Typography variant='h6' className='text-xl font-bold text-center text-gray-400'>
                  o inicia sesión con
                </Typography>
              </div>
              <div className='w-9/12 h-[1px] bg-gray-300' />
            </div>
            <Link href='/register'>
              <a className='w-full  flex justify-center items-center py-4 border-[1px] border-gray-300 rounded-lg'>
                <GoogleLogo width='40px' />
              </a>
            </Link>
          </div>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className='image-section'>
          <img src={loginImage} alt='' />
        </div>
      </Grid>
    </Grid>
  )
}

export default Login
