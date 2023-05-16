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
    <>
      <Typography variant='h4' color='black' fontWeight={600}>
        Expectativas
      </Typography>
      <div className='flex flex-row gap-10 h-full justify-center items-center'>
        <div className='grid grid-cols-2 xl:gap-x-8'>
          <div className='flex flex-col gap-4 py-4 px-5 justify-start text-center'>
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
          <div className='flex flex-col gap-4 text-center'>
            <Typography variant='h6' color='gray' fontWeight={600}>
              ¿Cuánto esperas por ella?
            </Typography>
            <div className='flex xl:flex-row flex-col gap-2 justify-center items-center'>
              <Typography variant='h6' color='gray' fontWeight={600}>
                Entre
              </Typography>
              <Input type='number' label='Precio minimo' />
              <Typography variant='h6' color='gray' fontWeight={600}>
                y
              </Typography>
              <Input type='number' label='Precio maximo' />
            </div>
            <div className='flex flex-row gap-4 justify-center items-center mt-10'>
              <Checkbox color='secondary' />
              <Typography variant='h6' color='gray' fontWeight={600}>
                No estoy seguro necesito ayuda
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expectations
