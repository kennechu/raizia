import { Typography } from '@mui/material'
import * as images from '../../utils/images'
import { useEffect, useMemo, useState } from 'react'

const Loader = () => {
  const arrayImages = useMemo(() => [images.load1, images.load2, images.load3], [])
  const [imgSrc, setImgSrc] = useState(arrayImages[0])
  const renderImage = (src: string) => {
    return (
      <div className='flex flex-col justify-center items-center gap-10 object-cover'>
        <img src={src} alt='logo' className='w-2/5 shadow-sm' />
      </div>
    )
  }
  const Mat = Math.floor(Math.random() * arrayImages.length)
  useEffect(() => {
    const interval = setInterval(() => {
      return setImgSrc(arrayImages[Mat])
    }, 900)
    return () => clearInterval(interval)
  }, [arrayImages, Mat])

  setTimeout(() => {
    window.location.href = '/policy'
  }, 3000)

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <Typography variant='h4' color='gray' fontWeight={600}>
          Buscando el mejor broker para ti
        </Typography>
        {renderImage(imgSrc)}
      </div>
    </div>
  )
}

export default Loader
