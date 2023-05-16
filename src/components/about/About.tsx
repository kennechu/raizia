import { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const About = ({ id }: { id: string }) => {
  const data = [{
    button: 'Empresa',
    accordions: [{
      title: '¿Quiénes somos?',
      content: 'Somos una plataforma digital que conecta a los mejores asesores inmobiliarios con las personas que buscan comprar o vender una propiedad. Nuestro objetivo es brindar un servicio de calidad, formal y digital.'
    }, {
      title: 'Empleos',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    button: 'Recursos',
    accordions: [{
      title: 'Centro de ayuda',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      title: '¿Qué hace un asesor inmobiliario?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }]
  }, {
    button: 'Monetización',
    accordions: [{
      title: '¿Cómo es rentable Raizia?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      title: 'Costos',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }]
  }, {
    button: 'Funcionamiento',
    accordions: [{
      title: 'Cuestionario',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      title: 'Asesores Raizia',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      title: 'Procesos de seguridad',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }]
  }, {
    button: '¿Cómo sé que es seguro?',
    accordions: [{
      title: '¿Cómo sé que es seguro?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      title: 'Privacidad',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      title: 'Seguridad',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }]
  }]
  const [selected, setSelected] = useState(data[0])
  const [expanded, setExpanded] = useState('')

  return (
    <div className='flex flex-col gap-5 lg:gap-y-12 py-5 lg:py-14 px-2 lg:px-40 bg-[#eaf3fa] text-center sm:text-left' id={id}>
      <h3 className='text-lg font-bold md:text-3xl'>
        CONOCE MÁS
      </h3>
      <div className='flex flex-col md:flex-row gap-10 max-w-6xl justify-center items-center md:items-start '>
        <div className='bg-secondary-color rounded-lg p-5 w-2/3 md:py-12 md:px-8'>
          {data.map((item) => (
            <div className='content-button' key={item.button}>
              <button
                className={`text-white font-semibold py-5 px-4 text-base md:text-2xl rounded-sm w-full text-center lg:text-left ${selected.button === item.button ? 'bg-primary-color' : ''}`}
                onClick={() => setSelected(item)}
              >
                <span className={` ${selected.button === item.button ? 'text-secondary-color' : ''}`}>{item.button}</span>
              </button>
            </div>
          ))}
        </div>
        <div className='w-full'>
          {selected.accordions.map((accordion) => (
            <Accordion
              className=''
              TransitionProps={{ unmountOnExit: true }}
              key={accordion.title}
              expanded={expanded === accordion.title}
              onChange={() => setExpanded(expanded === accordion.title ? '' : accordion.title)}
              variant='outlined'
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <span className='text-lg md:text-2xl font-bold'>{accordion.title}</span>
              </AccordionSummary>
              <AccordionDetails>
                <span className='text-sm md:text-base'>{accordion.content}</span>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
