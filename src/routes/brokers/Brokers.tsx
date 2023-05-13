import { useContext } from "react"
import { Button, Typography } from "@mui/material"
import users from '../../__mocks__/users.json'
import BrokerCard from "../../components/brokerCard/BrokerCard"
import FooterSteps from "../../components/footer/FooterSteps"
import { ArrowBack, ArrowForward } from "@mui/icons-material"
import { Link } from 'wouter'
import { Action } from '../../types/enums'
import { UserContext } from "../../context/userContext"

const Brokers = () => {

  const props = useContext(UserContext)
  const { currentUser, handleClick } = props

  return (
    <div className='flex flex-col w-full h-screen items-center gap-10'>
      <div className='w-full py-16 px-20 flex flex-col justify-center items-center gap-10 relative'>
        <Typography variant='h2' color='black' fontWeight={600}>
          Elige a tu broker
        </Typography>
        <BrokerCard key={users[currentUser].name} user={users[currentUser]} />
        <div className='w-1/4 bg-white'>
          <Link href='/agreements'>
            <Button variant='contained' fullWidth color='primary' size='large'>
              Contactar
            </Button>
          </Link>
        </div>
        <div className='absolute left-36 cursor-pointer' onClick={() => handleClick(Action.Prev)}>
          <button className='text-black hover:transform hover:scale-105 transition duration-300 ease-in-out '>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <ArrowBack fontSize='large' />
              Anterior
            </div>
          </button>
        </div>
        <div className='absolute right-36 cursor-pointer' onClick={() => handleClick(Action.Next)}>
          <button className='text-black hover:transform hover:scale-105 transition duration-300 ease-in-out '>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <ArrowForward fontSize='large' />
              Siguiente
            </div>
          </button>
        </div>
      </div>
      <FooterSteps />
    </div>

  )
}

export default Brokers
