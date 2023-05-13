import Footer from '../../components/footer/Footer'
import { RaiziaLogo } from '../../components/icons/Icons'
import About from '../../components/about/About'
import Reviews from '../../components/reviews/Reviews'
import { Button, Card } from '@mui/material'
import { FacebookOutlined, Twitter, Instagram, LinkedIn } from '@mui/icons-material'
import GoogleIcon from '@mui/icons-material/Google'
import { Link } from 'wouter'
import * as images from '../../utils/images'
import Property from '../../components/steps/Property'

const Home = () => (
  <div className='w-full bg-black p-0 m-0'>
    <main>
      <img src={images.background} alt='background' className='background' />
      <header>
        <section className='firstSection'>
          <RaiziaLogo color='white' width='180px' />
          <a className='ml-14 hover:scale-105 transition duration-300 ease-in-out text-xl' href='#how-it-works'>¿Cómo funciona?</a>
          <a className='ml-10 hover:scale-105 transition duration-300 ease-in-out text-xl' href='#about-us'>¿Cómo sé que es seguro?</a>
        </section>
        <section className='secondSection'>
          <Button variant='outlined' color='inherit' size='large'>REGISTRARSE COMO ASESOR</Button>
          <Link href='/login'>
            <Button variant='contained' color='primary' size='large'>
              ENCUENTRA A TU ASESOR
            </Button>
          </Link>
        </section>
      </header>
      <slot>
        <span>
          Asesoría inmobiliaria de calidad, formal y digital
        </span>
        <div>
          <p>Te garantizamos claridad y el mejor seguimiento en cada etapa del proceso con los mejores asesores del mercado</p>
        </div>
      </slot>
      <div className='action-buttons'>
        <Button variant='contained' color='primary' size='large'>ENCUENTRA TU ASESOR EN 10 MIN.</Button>
        <Button variant='outlined' color='primary' size='large' className='login-button'>
          <GoogleIcon color='info' />
          INICIA SESIÓN CON GOOGLE
        </Button>
      </div>

    </main>
    <section className='brand'>
      <p>En Raizia contamos con los mejores profesionales inmobiliarios que te ayudarán a vender o comprar una propiedad con el mejor servicio.</p>
      <p>Encontrar al mejor asesor inmobiliario para ti es <span>gratis</span> siempre.</p>
    </section>
    <section className='how-it-works' id='how-it-works'>
      <h2>¿CÓMO FUNCIONA?</h2>
      <div className='steps'>
        <Card
          variant='elevation'
          elevation={3}
          className='step-one-card left'
        >
          <Property />
        </Card>
        <div className='steps-desciption'>
          <span>Paso 1</span>
          <h3>Responde 5 preguntas</h3>
          <p>Con tan solo responder un breve cuestionario, nos permitirá extender que estás buscando y utilizando nuestro algoritmo encontraremos a los asesores con mayor experiencia para lo que tu necesites.</p>
        </div>
      </div>
      <div className='steps'>
        <div className='left-text'>
          <span>Paso 2</span>
          <h3>Elige un asesor</h3>
          <p>Te mostraremos a los mejores asesores para apoyarte en tu transición con vase en criterios relevantes como: Tipo de propiedad, ubicación, calificación del agente y más. Tu podrás elegír a quién te parezca que su experiencia sea lo que estás buscando.
          </p>
        </div>
        <Card
          variant='elevation'
          elevation={3}
          className='avatar-card'
        >
          <header>
            <img src='https://i.pravatar.cc/300' alt='' />
            <div className='info'>
              <h3>Daniela Renovato</h3>
              <h4>Hola, tengo amplia experiencia en el mercado</h4>
            </div>
          </header>
          <div className='divider' />
          <h3>Zonas de mayor experiencia</h3>
          <div className='chips'>
            <h4>Polanco</h4>
            <h4>Granada</h4>
            <h4>Cuitlahuac</h4>
          </div>
          <div className='divider' />
          <div className='social'>
            <div>
              <FacebookOutlined htmlColor='#3b5998' />
              <a>daniela_renovato</a>
            </div>
            <div>
              <Twitter htmlColor='#00acee' />
              <a>dani_renovato</a>
            </div>
            <div>
              <Instagram />
              <a>dani_casas</a>
            </div>
            <div>
              <LinkedIn htmlColor='#0072b1' />
              <a>Daniela Renovato</a>
            </div>
          </div>
        </Card>
      </div>
      <div className='steps'>
        <Card
          variant='elevation'
          elevation={3}
          className='step-one-card left'
        >
          <img src={images.person} alt='person' className='person' />
        </Card>
        <div className='steps-desciption'>
          <span>Paso 3</span>
          <h3>Realiza el seguimiento</h3>
          <p>Todo el proceso lo podrás ver y corroborar en tiempo real, además de tener el control de cada etapa, en la palma de tus manos.</p>
        </div>
      </div>
    </section>
    <About id='about-us' />
    <Reviews />
    <Footer />
  </div>
)

export default Home
