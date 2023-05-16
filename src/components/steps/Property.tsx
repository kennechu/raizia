import { useState } from 'react'
import * as images from '../../utils/images'

const Property = () => {
  const [selected, setSelected] = useState<number | null>(null)
  return (
    <div className='flex flex-col items-center justify-center p-5 gap-10 max-w-lg'>
      <h3 className='font-bold text-2xl'>
        ¿Qué tipo de inmbueble es?
      </h3>
      <div className=''>
        <div className='grid grid-cols-2 aspect-square'>
          <>
            <div className={`flex flex-col gap-2 justify-center items-center hover:scale-105 grayscale hover:grayscale-0 transition duration-300 ease-in-out ${selected === 0 ? 'grayscale-0' : ''}`} onClick={() => setSelected(0)}>
              <img src={images.house} alt='house' className='aspect-square w-3/4' />
            </div>
            <div className={`flex flex-col gap-2 justify-center items-center hover:scale-105 grayscale hover:grayscale-0 transition duration-300 ease-in-out ${selected === 1 ? 'grayscale-0' : ''}`} onClick={() => setSelected(1)}>
              <img src={images.depa} alt='depa' className='aspect-square w-3/4' />
            </div>
          </>
          <>
            <div className={`flex flex-col gap-2 justify-center items-center hover:scale-105 grayscale hover:grayscale-0 transition duration-300 ease-in-out ${selected === 2 ? 'grayscale-0' : ''}`} onClick={() => setSelected(2)}>
              <img src={images.another} alt='depa' className='aspect-square w-3/4' />
            </div>
            <div className={`flex flex-col gap-2 justify-center xs:flex items-center hover:scale-105 grayscale hover:grayscale-0 transition duration-300 ease-in-out ${selected === 3 ? 'grayscale-0' : ''}`} onClick={() => setSelected(3)}>
              <img src={images.house3} alt='depa' className='aspect-square w-3/4' />
            </div>
          </>
        </div>
      </div>
    </div>
  )
}

export default Property




