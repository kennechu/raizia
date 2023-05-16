import { useState } from 'react'
import { Button, Typography, Checkbox } from '@mui/material'
import Input from '../commons/Input'

const Expectations = () => {
  const [selected, setSelected] = useState('')
  const buttons = [
    'Lo mas pronto posible',
    'De 3 a 6 meses',
    'De 6 a 12 meses',
    'Mas de un año'
  ]
  return (
    <div>
      <h3 className='font-bold text-2xl'>
        Expectativas
      </h3>
      <div className='flex flex-row gap-10 h-full mt-10 justify-center items-center'>
        <div className='grid grid-cols-2 xl:gap-x-8'>
          <div className='flex flex-col gap-4 px-5 justify-start text-center'>
            <Typography variant='h6' color='gray' fontWeight={600}>
              ¿Cuánto tiempo esperas vender tu propiedad?
            </Typography>
            {buttons.map((text) => (
              <Button
                key={text}
                variant={`${selected === text ? 'contained' : 'outlined'}`}
                color='secondary'
                size='small'
                fullWidth
                onClick={() => setSelected(text)}
              >
                {text}
              </Button>
            ))}
          </div>
          <div className='flex flex-col gap-4 text-center px-5 justify-center items-center '>
            <Typography variant='h6' color='gray' fontWeight={600}>
              ¿Cuánto esperas por ella?
            </Typography>
            <div className='flex flex-col gap-2 justify-center items-start'>
              <div className='flex flex-col xl:grid xl:grid-cols-2 w-full justify-between items-center'>
                <span className='font-bold text-sm lg:text-base text-gray-500'>
                  Expectativas
                </span>
                <Input type='number' label='Precio minimo' />
              </div>
              <div className='flex flex-col xl:grid xl:grid-cols-2 w-full justify-between items-center'>
                <span className='font-bold text-sm lg:text-base text-gray-500'>
                  y
                </span>
                <Input type='number' label='Precio maximo' />
              </div>
            </div>
            <div className='flex flex-row gap-1 justify-center items-center mt-10'>
              <Checkbox color='secondary' />
              <span className='font-bold text-sm xl:text-xl text-gray-500'>
                No estoy seguro necesito ayuda
              </span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Expectations
