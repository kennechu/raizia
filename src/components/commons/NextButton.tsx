import { Button } from '@mui/material'
import { ArrowForward, ArrowBack } from '@mui/icons-material'
import { Link } from 'wouter'

interface NextButtonProps {
  forward: () => void
  back: () => void
  current: number
  size: number
  last?: boolean
}

const NextButton: React.FC<NextButtonProps> = ({ size, forward, back, current, last = false }) => {
  return (
    <div className='flex items-center justify-between w-9/12 mt-14'>
      <Button variant='outlined' size='large' color='secondary' onClick={() => back()}>
        <ArrowBack />
        <p className='hidden xl:flex'>
          {current > size ? 'Volver al inicio' : 'Regresar'}
        </p>
      </Button>
      {
        (size > 1) && (current < size) && (
          <div className='flex items-center justify-center gap-2'>
            {
              Array.from(Array(size).keys()).map((value) => (
                <div
                  key={value + 1}
                  className={`w-4 h-4 rounded-full border-2 border-gray-500 ${current >= value + 1 ? 'bg-gray-500' : 'bg-white'}`}
                />
              ))
            }
          </div>
        )
      }
      <Button variant='contained' color='primary' size='large' onClick={forward}>
        <Link to={last ? '/brokers' : '#'} className='text-white'>
          <a className='flex flex-row'>
            <p className='hidden xl:flex'>
              Continuar
            </p>
            <ArrowForward />
          </a>
        </Link>
      </Button>
    </div>
  )
}

export default NextButton
