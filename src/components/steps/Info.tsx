import { useState } from 'react'
import { Build, BusinessOutlined } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'

const Info = () => {
  const [selected, setSelected] = useState({
    build: '',
    remodel: ''
  })

  const buttons = [
    'DESPUES DEL 2010',
    'EN LA DECADA DE LOS 90',
    'EN LA DECADA DE LOS 80',
    'EN LA DECADA DE LOS 70'
  ]
  return (
    <div>
      <h3 className='font-bold text-2xl'>
        Información de la construcción
      </h3>
      <div className='flex flex-row gap-10 h-full justify-center items-center'>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col gap-4 py-4 px-5 justify-center items-center'>
            <Build fontSize='large' htmlColor='#09f' />
            <Typography variant='h6' color='gray' fontWeight={600}>
              ¿Cuándo fue constrida?
            </Typography>
            {buttons.map((text) => (
              <Button
                key={text}
                variant={`${selected.build === text ? 'contained' : 'outlined'}`}
                color='secondary'
                size='small'
                fullWidth
                onClick={() => setSelected({
                  ...selected,
                  build: text
                })}
              >
                {text}
              </Button>
            ))}
          </div>
          <div className='flex flex-col gap-4 py-4 px-5 justify-center items-center'>
            <BusinessOutlined fontSize='large' htmlColor='#09f' />
            <Typography variant='h6' color='gray' fontWeight={600}>
              ¿Cuándo fue la última remodelación?
            </Typography>
            {buttons.map((text) => (
              <Button
                key={text}
                variant={`${selected.remodel === text ? 'contained' : 'outlined'}`}
                color='secondary'
                size='small'
                fullWidth
                onClick={() => setSelected({
                  ...selected,
                  remodel: text
                })}
              >
                {text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
