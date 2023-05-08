import { useState } from 'react'
import * as images from '../../utils/images'
import { Typography } from '@mui/material'

const Property = () => {
  const [selected, setSelected] = useState('')
  return (
    <div className='flex flex-col w-fit justify-center items-center'>
      <Typography variant='h4' color='black' fontWeight={600}>
        ¿Qué tipo de inmbueble es?
      </Typography>
      <div className='images'>
        <div className={`action-container ${selected === 'casa' ? 'selected' : ''}`} onClick={() => setSelected('casa')}>
          <img src={images.house} alt='house' />
          <h3 className='button-house'>casa</h3>
        </div>
        <div className={`action-container ${selected === 'Departamento' ? 'selected' : ''}`} onClick={() => setSelected('Departamento')}>
          <img src={images.depa} alt='depa' />
          <h3 className='button-house'>Departamento</h3>
        </div>
        <div className={`action-container ${selected === 'Casa con uso de suelo' ? 'selected' : ''}`} onClick={() => setSelected('Casa con uso de suelo')}>
          <img src={images.another} alt='depa' />
          <h3 className='button-house'>Casa con uso de suelo</h3>
        </div>
        <div className={`action-container ${selected === 'Casa en condominio' ? 'selected' : ''}`} onClick={() => setSelected('Casa en condominio')}>
          <img src={images.house3} alt='depa' />
          <h3 className='button-house'>Casa en condominio</h3>
        </div>
      </div>
    </div>
  )
}

export default Property
