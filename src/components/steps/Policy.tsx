import { Typography } from "@mui/material"
import { policy } from '../../utils/images'

const Policy = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <Typography variant='h4' color='black' fontWeight={500}>
        Antes de continuar
      </Typography>
      <img src={policy} className='w-40' />
      <p className="text-gray-600 text-justify text-[18px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nostrum ratione magnam numquam adipisci, non ut tenetur minima aliquid officia placeat ipsa vel sint deserunt ullam, magni, perspiciatis at provident!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="text-gray-600 text-justify text-[18px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque odio quam soluta aspernatur maxime magni tempore corrupti. Neque eum id odio ut vero laborum nostrum beatae? Voluptates, nesciunt maxime?
        Lorem ipsum dolor
      </p>
    </div>
  )
}

export default Policy
