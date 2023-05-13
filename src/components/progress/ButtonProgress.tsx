import { CheckCircle, CheckCircleOutline, ChevronLeft, Timelapse } from "@mui/icons-material"
import { Button } from "@mui/material"

const buttonProps = {
  stage: 'Etapa 1:',
  text: 'Selección de Asesor',
  finished: false,
  subtasks: [{
    text: 'Realizar cuestionario',
    finished: true,
  }, {
    text: 'Elegir asesor',
    finished: false,
  }],
}

interface ButtonProgresProps {
  selected: boolean
  buttonProps: typeof buttonProps
  handleClick: () => void
}

const ButtonProgres = ({
  selected,
  buttonProps,
  handleClick,
}: ButtonProgresProps) => {

  return (
    <div className='flex flex-col gap-4'>
      <div onClick={handleClick} className={`flex flex-row items-center w-full justify-between border-2 py-2 px-2 rounded-md border-[#0B2742] ${selected ? 'bg-[#0B2742]' : ''} cursor-pointer transition duration-500 ease-in-out`}>
        <div className='flex flex-row gap-2 items-center'>
          {buttonProps.finished ? (selected ? <CheckCircle htmlColor='#fff' /> : <CheckCircleOutline htmlColor='#0B2742' />) :
            (selected ? <CheckCircleOutline htmlColor='#0B2742' /> : <Timelapse htmlColor='#0B2742' className='rotate-[120deg]' />)
          }
          <p className={`${selected ? 'text-white' : 'text-[#0B2742]'} text-lg font-semibold`}>{buttonProps.stage}</p>
          <p className={`${selected ? 'text-white' : 'text-[#0B2742]'} text-lg font-semibold`}>{buttonProps.text}</p>
        </div>
        <ChevronLeft className={selected ? 'rotate-90' : '-rotate-90'} htmlColor={selected ? '#fff' : '#0B2742'} />
      </div>
      {selected && buttonProps.subtasks.map(subtask => (
        (
          <div className={`flex flex-row items-center justify-start gap-10 px-10 border-2 py-2 border-[#0B2742] ml-20 rounded-md transition duration-500 ease-in-out`}>
            <div className='flex flex-row gap-2 items-center'>
              {subtask.finished ? <CheckCircleOutline htmlColor='#0B2742' /> : <Timelapse htmlColor='#0B2742' className='rotate-[120deg]' />}
              <p className='text-[#0B2742] text-lg font-semibold'>{subtask.text}</p>
            </div>
            {!subtask.finished && <Button variant="contained">Realizar</Button>}
          </div>
        )
      ))}
    </div>
  )
}

export default ButtonProgres
