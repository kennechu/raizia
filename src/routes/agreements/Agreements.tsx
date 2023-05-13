import { Button, Typography } from "@mui/material"
import FooterSteps from "../../components/footer/FooterSteps"
import { login } from "../../utils/images"
import { Link } from "wouter"
import { ArrowForward } from "@mui/icons-material"

const Agreements = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-around'>
      <div className='flex flex-col gap-5 bg-white w-3/4 shadow-md py-10 px-24 justify-center items-center'>
        <Typography variant='h3' color='black' fontWeight={500} className='p-10'>
          Acuerdos de comisión
        </Typography>
        <div className='grid grid-cols-2 place-content-center gap-10'>
          <div className="flex">
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis praesentium recusandae architecto odio commodi alias ipsum, pariatur error magnam unde soluta totam voluptatibus labore accusamus adipisci debitis eius quod.</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={login} width={400} />
          </div>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <Link href='/'>
            <Button variant='outlined' color='secondary' size='large'>
              Cancelar
            </Button>
          </Link>
          <Link href='/accept'>
            <Button variant='contained' color='primary' size='large'>
              Finalizar
              <ArrowForward />
            </Button>
          </Link>
        </div>
      </div>
      <FooterSteps />
    </div >
  )
}

export default Agreements
