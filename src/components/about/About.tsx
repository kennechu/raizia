import { useState } from 'react'
import { Stack, Accordion, AccordionSummary, AccordionDetails, Grid, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import './about.css'

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
    <div className='flex flex-col gap-y-12 py-14 px-40 bg-[#eaf3fa] items-center' id={id}>
      <Typography fontWeight={600} style={{ color: 'rgb(11,39,66)', fontSize: '3rem', alignSelf: 'flex-start' }}>
        CONOCE MÁS
      </Typography>
      <Grid container>
        <Grid xs='auto' marginRight={5}>
          <Stack className='buttons'>
            {data.map((item) => (
              <div className='content-button' key={item.button}>
                <button
                  className={selected.button === item.button ? 'button-selected' : 'button-select'}
                  onClick={() => setSelected(item)}
                >
                  {item.button}
                </button>
              </div>
            ))}
          </Stack>
        </Grid>
        <Grid xs={7}>
          <Stack>
            {selected.accordions.map((accordion) => (
              <Accordion
                TransitionProps={{ unmountOnExit: true }}
                key={accordion.title}
                expanded={expanded === accordion.title}
                onChange={() => setExpanded(expanded === accordion.title ? '' : accordion.title)}
                variant='outlined'
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color='black' variant='h5'>
                    {accordion.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color='black' variant='h6'>
                    {accordion.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
