import { Button } from '@mui/material'
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
    <div className='flex flex-col lg:grid lg:grid-cols-2 '>
      <div>
        <div className='flex flex-col p-16 bg-white h-full gap-8 text-center'>
          <Link href='/'>
            <RaiziaLogo width='120px' color='#4b4b4b' />
          </Link>
          <h3 className='text-3xl lg:text-5xl font-bold text-center text-gray-700'>
            ¡Bienvenido!
          </h3>
          <h3 className='text-xl lg:text-3xl font-bold text-center text-gray-600'>
            Crea una cuenta para comenzar.
          </h3>
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
                <h3 className='text-xl lg:text-xl font-bold text-center text-gray-600'>
                  o inicia sesión con
                </h3>
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
      </div>
      <div className='hidden lg:flex'>
        <div className='image-section'>
          <img src={loginImage} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Login
