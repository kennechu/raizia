import { Button, Divider, Grid, Typography } from '@mui/material'
import './reviews.css'

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
    <div className='container-review'>
      <Typography variant='h4' fontWeight={600} style={{ color: 'rgb(11,39,66)', textTransform: 'capitalize' }}>
        Los mejores asesores inmobiliarios, con el mejor servicio transpaernte garantizado
      </Typography>
      <div className='data-review'>
        {data.map((item, index) => (
          <div key={item.title} className='chips'>
            <div className='chip-review'>
              <Typography variant='h2' fontWeight={600} style={{ color: 'rgb(11,39,66)', textTransform: 'capitalize' }}>
                {item.value}
              </Typography>
              <Typography variant='h5' fontWeight={200} style={{ color: 'rgb(11,39,66)', textTransform: 'capitalize' }}>
                {item.title}
              </Typography>
            </div>
            {index !== data.length - 1 && <Divider orientation='vertical' flexItem color='black' />}
          </div>
        ))}
      </div>
      <Typography variant='h6' fontWeight={200} style={{ color: 'rgb(11,39,66)', textTransform: 'capitalize' }}>
        Raizia es la plataforma que facilita la compra o venta de cualquier inmbueble, sin engaños y digital.
      </Typography>
      <Grid container justifyContent='center' gap={5}>
        <Grid>
          <Button variant='contained' color='secondary' size='large' style={{ padding: '15px 30px' }}>
            <Typography variant='subtitle1' fontWeight={600}>
              Registrate como asesor
            </Typography>
          </Button>
        </Grid>
        <Grid>
          <Button variant='outlined' color='secondary' size='large' style={{ padding: '15px 30px' }}>
            <Typography variant='subtitle1' fontWeight={600}>
              Encuentra a tu asesor
            </Typography>
          </Button>
        </Grid>
      </Grid>

    </div>
  )
}

export default Reviews
