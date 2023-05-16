import Button from '../../components/buttons/Button'
import GoogleIcon from '@mui/icons-material/Google'
import * as images from '../../utils/images'
import Navbar from '../../components/navigation/Navbar'
import { Card } from '@mui/material'
import Property from '../../components/steps/Property'
import { FacebookOutlined, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import About from '../../components/about/About'
import Reviews from '../../components/reviews/Reviews'
import Footer from '../../components/footer/Footer'

const Home = () => (
  <div className='w-full h-screen bg-background-color p-0 m-0'>
    <Navbar />
    <main className="flex flex-col items-center justify-start bg-secondary-color">
      <div className='flex flex-col gap-3 py-12 justify-center items-center px-6 max-w-3xl'>
        <p className='text-3xl text-white font-bold text-center md:text-6xl'>Asesoría inmobiliaria de calidad, formal y digital </p>
        <p className='text-base text-white font-normal text-center md:text-xl'>Te garantizamos claridad y el mejor seguimiento en cada etapa del proceso con los mejores asesores del mercado</p>
      </div>
      <div className='hidden md:flex md:flex-row md:gap-5'>
        <Button>ENCUENTRA TU ASESOR EN 10 MIN.</Button>
        <Button outlined>
          <GoogleIcon htmlColor='white' />
          INICIA SESIÓN CON GOOGLE
        </Button>
      </div>
      <img src={images.background} className='w-fit h-fit object-contain' />
    </main >
    <section className='flex flex-col items-center justify-center py-8 md:px-24 px-11 bg-white'>
      <p className='text-xs text-black font-normal text-center md:text-xl'>En Raizia contamos con los mejores profesionales inmobiliarios que te ayudarán a vender o comprar una propiedad con el mejor servicio.</p>
      <p className='text-xs text-black font-normal text-center md:text-xl'>Encontrar al mejor asesor inmobiliario para ti es <span>gratis</span> siempre.</p>
    </section>
    <section className='bg-white flex flex-col justify-end items-center py-5' id='how-it-works'>
      <h2 className='text-secondary-color text-2xl font-bold'>¿CÓMO FUNCIONA?</h2>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 py-10 px-10 md:max-w-7xl'>
        <Card
          variant='elevation'
          elevation={3}
        >
          <Property />
        </Card>
        <div className='flex flex-col text-base md:text-2xl md:max-w-lg'>
          <span className='font-bold text-gray-500'>Paso 1</span>
          <h3 className='font-bold text-gray-900'>Responde 5 preguntas</h3>
          <p>Con tan solo responder un breve cuestionario, nos permitirá extender que estás buscando y utilizando nuestro algoritmo encontraremos a los asesores con mayor experiencia para lo que tu necesites.</p>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 py-10 px-10 md:max-w-7xl lg:text-right'>
        <div className='flex flex-col text-base md:text-2xl md:max-w-lg'>
          <span className='font-bold text-gray-500'>Paso 2</span>
          <h3 className='font-bold text-gray-900'>Elige un asesor</h3>
          <p >Te mostraremos a los mejores asesores para apoyarte en tu transición con vase en criterios relevantes como: Tipo de propiedad, ubicación, calificación del agente y más. Tu podrás elegír a quién te parezca que su experiencia sea lo que estás buscando.
          </p>
        </div>
        <Card
          variant='elevation'
          elevation={3}
          className='max-w-lg'
        >
          <div className='flex flex-col p-5 max-w-lg'>
            <>
              <div className='flex flex-row gap-5 p-2 lg:p-10 justify-center items-center'>
                <img src='https://i.pravatar.cc/150?img=28' className='rounded-full w-20 lg:w-32' />
                <div className='flex flex-col gap-1 lg:gap-3 text-left'>
                  <h3 className='font-bold text-gray-900 text-lg lg:text-2xl' >Daniela Renovato</h3>
                  <h4 className=' text-xs lg:text-base'>Hola, tengo amplia experiencia en el mercado</h4>
                </div>
              </div>
              <div className='w-full h-[1px] bg-gray-400' />
              <h3 className='font-bold text-sm md:text-lg text-left pt-3'>Zonas de mayor experiencia</h3>
              <div className='flex flex-row w-full justify-start gap-6 items-center py-3'>
                <h4 className='bg-secondary-color px-6 py-1 rounded-full text-white font-semibold text-xs lg:text-base'>Polanco</h4>
                <h4 className='bg-secondary-color px-6 py-1 rounded-full text-white font-semibold text-xs lg:text-base'>Granada</h4>
                <h4 className='hidden lg:flex bg-secondary-color px-6 py-1 rounded-full text-white font-semibold text-xs lg:text-base'>Cuitlahuac</h4>
              </div>
              <div className='w-full h-[1px] bg-gray-400 mt-3' />
              <div className='flex flex-col justify-start items-start gap-4 py-4'>
                <div className='flex flex-row gap-4'>
                  <FacebookOutlined htmlColor='#3b5998' />
                  <a className='text-sm lg:text-lg'>daniela_renovato</a>
                </div>
                <div className='flex flex-row gap-4'>
                  <Twitter htmlColor='#00acee' />
                  <a className='text-sm lg:text-lg'>dani_renovato</a>
                </div>
                <div className='flex flex-row gap-4'>
                  <Instagram />
                  <a className='text-sm lg:text-lg'>dani_casas</a>
                </div>
                <div className='flex flex-row gap-4'>
                  <LinkedIn htmlColor='#0072b1' />
                  <a className='text-sm lg:text-lg'>Daniela Renovato</a>
                </div>
              </div>
            </>
          </div>
        </Card>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 py-10 px-10 md:max-w-7xl'>
        <Card
          variant='elevation'
          elevation={3}
          className='flex justify-center items-center max-w-xl'
        >
          <img src={images.person} alt='person' className='w-2/3' />
        </Card>
        <div className='flex flex-col text-base md:text-2xl md:max-w-lg'>
          <span className='font-bold text-gray-500'>Paso 3</span>
          <h3 className='font-bold text-gray-900'>Realiza el seguimiento</h3>
          <p>Todo el proceso lo podrás ver y corroborar en tiempo real, además de tener el control de cada etapa, en la palma de tus manos.</p>
        </div>
      </div>
    </section>
    <About id='about-us' />
    <Reviews />
    <Footer />
  </div >
)

export default Home
