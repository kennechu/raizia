import { useState } from 'react'
import { Typography } from '@mui/material'
import Input from '../commons/Input'
import { GoogleMap, useLoadScript, Circle } from '@react-google-maps/api'
import { mockMexicoCities, DEFAULT_LOCATION, API_KEY } from '../../utils/constants'

const Map = ({ type }: { type: string }) => {
  const [selectedCity, setSelectedCity] = useState(DEFAULT_LOCATION.name)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY
  })

  const getMapCenter = (selectedCity: string) => {
    let result: { lat: number, lng: number } = { lat: 19.432608, lng: -99.133209 }
    const filteredCity = mockMexicoCities.filter(
      (city) => city.name === selectedCity
    )
    if ((selectedCity.length === 0) || filteredCity.length === 0) {
      result = {
        lat: filteredCity[0].lat,
        lng: filteredCity[0].lng
      }
    } else {
      result = DEFAULT_LOCATION
    }
    return result
  }

  return (
    <>
      <h3 className='font-bold text-2xl'>
        ¿En qué ubicación te gustaría {type}?
      </h3>
      <div className='flex flex-col gap-3'>
        <Typography variant='h6' color='gray' fontWeight={600}>
          Dirección
        </Typography>
        <div className='flex flex-row justify-center items-center'>
          <Input label='Código postal' />
          <select className='w-full py-3 mx-14 px-6 bg-white text-gray-600 text-xl border-2 border-gray-400 rounded-lg'>
            <option value=''>Selecciona una ciudad</option>
            {mockMexicoCities.map((city) => (
              <option
                key={city.id}
                value={city.id}
                onSelect={() => setSelectedCity(city.name)}
              >
                {city.name}
              </option>
            ))}
          </select>
        </div>
        {!isLoaded && (
          <div role="status" className="flex items-center justify-center h-[30vh] w-full bg-gray-300 animate-pulse dark:bg-gray-500">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {isLoaded && (
          <>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '30vh' }}
              zoom={15}
              center={getMapCenter(selectedCity)}
            >
              <Circle options={{ center: getMapCenter(selectedCity), strokeColor: '#09f', fillColor: '#09f', radius: 50, fillOpacity: 0.2 }} />
            </GoogleMap>
          </>
        )}
      </div>
    </>
  )
}

export default Map
