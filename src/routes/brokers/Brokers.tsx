import { useContext } from "react"
import { Button } from "@mui/material"
import users from '../../__mocks__/users.json'
import BrokerCard from "../../components/brokerCard/BrokerCard"
import { ArrowBack, ArrowForward } from "@mui/icons-material"
import { Link } from 'wouter'
import { Action } from '../../types/enums'
import { UserContext } from "../../context/userContext"

const Brokers = () => {

  const props = useContext(UserContext)
  const { currentUser, handleClick } = props

  return (
    <div className='flex flex-col w-full h-screen'>
      <div className='w-full py-16 flex flex-col justify-center items-center gap-10 relative'>
        <h2 className='text-4xl font-bold xl:text-5xl'>
          Elige a tu broker
        </h2>
        <BrokerCard key={users[currentUser].name} user={users[currentUser]} />
        <div className='w-1/4 bg-white'>
          <Link href='/agreements'>
            <Button variant='contained' fullWidth color='primary' size='large'>
              Contactar
            </Button>
          </Link>
        </div>
        <div className='absolute left-0 xl:left-36 cursor-pointer' onClick={() => handleClick(Action.Prev)}>
          <button className='text-black hover:transform hover:scale-105 transition duration-300 ease-in-out '>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <ArrowBack fontSize='large' />
              <span className='hidden xl:flex'>
                Anterior
              </span>
            </div>
          </button>
        </div>
        <div className='absolute right-0 lg:right-36 cursor-pointer' onClick={() => handleClick(Action.Next)}>
          <button className='text-black hover:transform hover:scale-105 transition duration-300 ease-in-out '>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <ArrowForward fontSize='large' />
              <span className='hidden xl:flex'>
                Siguiente
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Brokers
