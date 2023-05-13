import { Typography } from '@mui/material'
import { useState } from 'react'
import Input from '../commons/Input'
import { CheckCircleOutline } from '@mui/icons-material'

const Profile = () => {
  const [validate, setValidate] = useState(false)

  const ladas = [
    {
      country: 'México',
      lada: '+52'
    }, {
      country: 'Perú',
      lada: '+51'
    }, {
      country: 'Colombia',
      lada: '+57'
    }, {
      country: 'Chile',
      lada: '+56'
    }, {
      country: 'Argentina',
      lada: '+54'
    }
  ]

  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agost', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  return (
    <>
      <Typography variant='h4' color='black' fontWeight={600}>
        Completa tu perfil
      </Typography>
      <form className='flex flex-col min-w-full gap-4 mt-6'>
        <Typography variant='h5' color='black' fontWeight={600}>
          Nombre completo*
        </Typography>
        <div className='flex flex-row gap-8  w-full'>
          <Input label='Nombre' />
          <Input label='Apellido' />
        </div>
        <div className='mt-6'>
          <Typography variant='h5' color='black' fontWeight={600}>
            Fecha de nacimiento*
          </Typography>
          <select className='bg-white border-gray-400 text-gray-500 py-3 px-7 mr-4 border-2 rounded-md text-lg'>
            <option value=''>Día</option>
            {Array.from(Array(31).keys()).map((day, index) => (
              <option key={index} value={day + 1}>{day + 1}</option>
            ))}
          </select>
          <select className='bg-white border-gray-400 text-gray-500 py-3 px-7 mr-4 border-2 rounded-md text-lg'>
            <option value=''>Mes</option>
            {meses.map((month, index) => (
              <option key={index} value={index + 1}>{month}</option>
            ))}
          </select>
          <select className='bg-white border-gray-400 text-gray-500 py-3 px-7 mr-4 border-2 rounded-md text-lg'>
            <option value=''>Año</option>
            {Array.from(Array(50).keys()).map((year, index) => (
              <option key={index} value={year + 1970}>{year + 1970}</option>
            ))}
          </select>
        </div>
        <div className='mt-6'>
          <Typography variant='h5' color='black' fontWeight={600}>
            Teléfono*
          </Typography>
          <div className='flex flex-row gap-4'>
            <select className='bg-white border-gray-400 text-gray-500 py-3 px-7 mr-1 border-2 rounded-md text-lg'>
              {ladas.map((lada, index) => (
                <option key={index} value={lada.lada}>{lada.lada}</option>
              ))}
            </select>
            <Input label='Numero' />
            <div className='flex flex-row w-4/12 justify-start items-center'>
              <button
                className='text-green-500 hover:text-green-700  hover:border-green-700 py-2 px-4'
                onClick={(e) => {
                  e.preventDefault()
                  setValidate(!validate)
                }}
              >
                {validate ? <CheckCircleOutline /> : 'Validar teléfono'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>

  )
}

export default Profile
