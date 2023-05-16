import { Link } from "wouter"
import { RaiziaLogo } from "../../components/icons/Icons"
import { Button, Divider, Typography } from "@mui/material"
import ButtonProgress from "../../components/progress/ButtonProgress"
import { another } from '../../utils/images'
import './Binnacle.css'
import { useState } from "react"

const Binnacle = () => {
  const progressButtons = [{
    stage: 'Etapa 1:',
    text: 'Selección de Asesor',
    finished: true,
    subtasks: [{
      text: 'Realizar cuestionario',
      finished: true,
    }, {
      text: 'Elegir asesor',
      finished: true,
    }],
  }, {
    stage: 'Etapa 2:',
    text: 'Contacto con tu asesor',
    finished: true,
    subtasks: [{
      text: 'Charla inicial',
      finished: true,
    }, {
      text: 'Agendar cita',
      finished: true,
    }],
  }, {
    stage: 'Etapa 3:',
    text: 'Recolección de papeles',
    finished: false,
    subtasks: [{
      text: 'Envio de escrituras',
      finished: false,
    }, {
      text: 'Envio de predial',
      finished: true,
    }],
  }, {
    stage: 'Etapa 4:',
    text: 'Visitas a tu propiedad',
    finished: true,
    subtasks: [{
      text: 'Visita con asesor',
      finished: true,
    }, {
      text: 'Visita de valuador',
      finished: true,
    }],
  }, {
    stage: 'Etapa 5:',
    text: 'Ofertas',
    finished: false,
    subtasks: [{
      text: 'Valoración del inmueble',
      finished: true,
    }, {
      text: 'Aceptar oferta',
      finished: false,
    }],
  }];

  const [selected, setSelected] = useState<number | null>(null)
  const handleClick = (value: number) => {
    if (selected === value) return setSelected(null)
    setSelected(value)
  }

  return (
    <div className='flex flex-col gap-9 justify-center items-center h-fit xl:grid grid-cols-2'>
      <div className="flex flex-col w-full bg-white p-12 gap-9">
        <Link href='/'>
          <a>
            <RaiziaLogo color="#000" width="120px" />
          </a>
        </Link>
        <section className='flex flex-col bg-[#0B2742] w-fit gap-2 pl-12 py-5 pr-6 -ml-12'>
          <Typography variant='h5' color='white' fontWeight={700}>
            RECOLECCIÓN DE PAPELES
          </Typography>
          <Typography variant='h6' color='white' fontWeight={400}>
            Etapa Actual Del roceso
          </Typography>
        </section>
        <section className="flex flex-col gap-4">
          <Typography variant='h5' color='black' fontWeight={700}>
            ¿Qué pasa en esta etapa?
          </Typography>
          <p className="text-base text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur adipisci, facere veritatis aliquid odio quasi sequi? Et, commodi. Laudantium, possimus illo! Error illum saepe et soluta, enim tempora incidunt sequi!
          </p>
        </section>
        <div className="flex xl:grid xl:grid-cols-2 gap-9">
          <section className="flex flex-col gap-4">
            <Typography variant='h5' color='black' fontWeight={700}>
              ¿Qué papeles necesito?
            </Typography>
            <p className="text-base text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur adipisci, facere veritatis aliquid odio quasi sequi? Et, commodi. Laudantium, possimus illo! Error illum saepe et soluta, enim tempora incidunt sequi!
            </p>
            <ul className='text-lg text-gray-900 font-semibold'>
              <li>1. Escrituras</li>
              <li>2. Predial</li>
            </ul>
            <p className="text-base text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima provident nulla itaque voluptas, labore molestiae magnam, debitis recusandae tenetur suscipit voluptates dignissimos a quo hic incidunt? Consequatur itaque natus deserunt.</p>
          </section>
          <img src={another} width='350px' className='hidden xl:flex' />
        </div>
        <Divider color="black" />
        <p className="text-base text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi iusto accusantium suscipit nihil magnam dolorum, laudantium rerum quo porro nesciunt non odio ullam impedit rem minima in labore repellat.</p>
        <div>
          <Button variant="outlined" color='secondary'>
            Dar retroalimentación
          </Button>
        </div>
      </div>
      <div className='flex flex-col w-full h-full px-16 py-12 gap-9 bg-background-color'>
        <Typography variant='h5' color='black' fontWeight={700}>
          PROCESO DE VENTA
        </Typography>
        {progressButtons.map((props, index) => (
          <ButtonProgress buttonProps={props} handleClick={() => handleClick(index)} selected={index === selected} />
        ))}
      </div>
    </div>
  )
}

export default Binnacle
