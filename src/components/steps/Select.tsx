import { useState } from 'react'
import { Typography } from '@mui/material'
import { sell, buy, snb } from '../../utils/images'

const Select = ({ setType }: { setType: (args: string) => void }) => {
  const [selected, setSelected] = useState('')

  const options = [
    {
      title: 'Vender',
      source: sell
    }, {
      title: 'Comprar',
      source: buy
    }, {
      title: 'Vender y comprar',
      source: snb
    }
  ]

  function handleClick(title: string) {
    setSelected(title)
    setType(title)
  }
  return (
    <>
      <Typography variant='h4' color='black' fontWeight={600}>
        ¿Qué deseas hacer?
      </Typography>
      <div className='flex flex-row gap-10 h-full justify-center items-center'>
        {options.map(option => (
          <div
            key={option.title}
            className={`flex flex-col gap-2 items-center justify-center cursor-pointer hover:transform hover:grayscale-0 grayscale hover:scale-105 transition duration-300 ease-in-out ${selected === option.title ? 'grayscale-0' : ''}`}
            onClick={() => handleClick(option.title)}
          >
            <img
              src={option.source}
              alt={option.title}
              className='w-72 aspect-square object-contain'
            />
            <Typography variant='h6' color='black' fontWeight={600}>
              {option.title}
            </Typography>
          </div>
        ))}
      </div>
    </>
  )
}

export default Select
