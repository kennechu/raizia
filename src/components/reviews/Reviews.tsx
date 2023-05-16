import { Button, Grid, Typography } from '@mui/material'
import { Link } from 'wouter'

const Reviews = () => {
  const data = [{
    title: 'Asesores calificados',
    value: 55
  }, {
    title: 'Transacciones exitosas',
    value: 83
  }, {
    title: 'Clientes satisfechos',
    value: 152
  }]
  return (
    <div className='flex flex-col py-10 justify-center items-center text-center w-full px-6 gap-10'>
      <h3 className='text-xl font-bold md:text-3xl'>
        Los mejores asesores inmobiliarios, con el mejor servicio transpaernte garantizado
      </h3>
      <div className='flex flex-row bg-gray-100 border-[1px] border-gray-700 rounded-3xl'>
        {data.map((item) => (
          <div key={item.title} className='flex justify-center items-center py-4 px-3'>
            <div className='flex flex-col justify-center items-center'>
              < h3 className='text-3xl font-bold md:text-4xl' >
                {item.value}
              </h3>
              <h3 className='text-base md:text-xl'>
                {item.title}
              </h3>
            </div>
          </div >
        ))}
      </div >
      <h3 className='text-xl font-medium md:text-2xl text-secondary-color'>
        Raizia es la plataforma que facilita la compra o venta de cualquier inmbueble, sin engaños y digital.
      </h3>
      <Grid container justifyContent='center' gap={5}>
        <Grid>
          <Button variant='contained' color='secondary' size='large' style={{ padding: '15px 30px' }}>
            <Typography variant='subtitle1' fontWeight={600}>
              Registrate como asesor
            </Typography>
          </Button>
        </Grid>
        <Grid>
          <Link href='/login'>
            <Button variant='outlined' color='secondary' size='large' style={{ padding: '15px 30px' }}>
              <Typography variant='subtitle1' fontWeight={600}>
                Encuentra a tu asesor
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>

    </div >
  )
}

export default Reviews
