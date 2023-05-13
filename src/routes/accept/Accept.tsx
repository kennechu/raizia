import { Button, Typography } from "@mui/material"
import FooterSteps from "../../components/footer/FooterSteps"
import { Link } from "wouter"
import users from '../../__mocks__/users.json'
import { useContext } from "react"
import { UserContext } from "../../context/userContext"

const Accept = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <div className='flex flex-col w-full h-auto items-center justify-around gap-20 pt-11'>
      <Typography variant='h3' color='black' fontWeight={500} className='p-10'>
        Ya tienes un asesor inmobiliario!
      </Typography>
      <div className='flex flex-col  bg-white w-3/5 shadow-md py-20 px-24 justify-center items-center gap-10'>
        <p className='text-gray-700 text-center'>{`${users[currentUser].name} se comunicara contigo en menos de 12 horas. Si no te contacta o deseas contactarlo antes, esta es su tarjeta de contacto:`}</p>
        <div className='grid grid-cols-2 place-content-center gap-10'>
          <img src={users[currentUser].avatar} width={200} />
          <div className='flex flex-col justify-around items-start'>
            <div className="flex flex-col">
              <p className='text-gray-700 font-thin'>Telefono</p>
              <p className='text-gray-700 font-bold'>55 0000 0000</p>
            </div>
            <div className="flex flex-col">
              <p className='text-gray-700 font-thin'>Correo</p>
              <p className='text-gray-700 font-bold'>{users[currentUser].social.blog}</p>
            </div>
          </div>
        </div>
      </div>
      <Link href='/'>
        <Button variant='contained' color='primary' size='large'>
          Ir a la bitacora de progreso
        </Button>
      </Link>
      <FooterSteps />
    </div>
  )
}

export default Accept
