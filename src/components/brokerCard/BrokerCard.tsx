import { Divider, Typography } from "@mui/material"
import { type User } from "../../types/shared"
import { ChromeReaderMode, FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material"

const BrokerCard = ({ user }: { user: User }) => {
  const colors = [
    'bg-[#afe4cf]',
    'bg-[#034459]',
    'bg-[#7dd8b2]',
    'bg-[#87dcd9]',
    'bg-[#52bbb8]',
    'bg-[#0c2742]',
  ]
  return (
    <div className='flex flex-col max-w-7xl gap-8 '>
      <div className='flex flex-row gap-10 max-w-7xl h-fit'>
        <div className='flex flex-row gap-8 bg-white rounded-lg shadow-lg items-center max-w-lg h-full p-10 cursor-default'>
          <img src={user.avatar} alt={user.name} className='rounded-full w-28 h-28 p-0 m-0' />
          <div className='flex flex-col justify-center items-start gap-3'>
            <Typography variant='h4' color='black' fontWeight={600}>
              {user.name}
            </Typography>
            <p className='text-lg text-gray-700 '>
              {user.presentation}
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 justify-center '>
          {
            user.importants.map((important) => (
              <div key={important.description} className='flex flex-row gap-10 p-7  items-center bg-white  rounded-lg shadow-lg'>
                <Typography variant='h3' color='black' fontWeight={600}>
                  {important.time}
                </Typography>
                <Typography variant='h6' color='black' fontWeight={400}>
                  {important.description}
                </Typography>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col gap-3 rounded-lg bg-white shadow-lg p-4 justify-around '>
          <div className='flex flex-row gap-4 items-center'>
            <FacebookRounded htmlColor="#072726" />
            <Typography variant='h6' color='black' fontWeight={400}>
              {user.social.facebook}
            </Typography>
          </div>
          <div className='flex flex-row gap-4 items-center'>
            <Instagram htmlColor="#072726" />
            <Typography variant='h6' color='black' fontWeight={400}>
              {user.social.instagram}
            </Typography>
          </div>
          <div className='flex flex-row gap-4 items-center'>
            <LinkedIn htmlColor="#072726" />
            <Typography variant='h6' color='black' fontWeight={400}>
              {user.social.linkedin}
            </Typography>
          </div>
          <div className='flex flex-row gap-4 items-center'>
            <ChromeReaderMode htmlColor="#072726" />
            <Typography variant='h6' color='black' fontWeight={400}>
              {user.social.blog}
            </Typography>
          </div>
        </div>
      </div>

      <div className='flex flex-col bg-white rounded-lg shadow-lg w-full p-10 '>
        <Typography variant='h6' color='black' fontWeight={600}>
          Zona de Mayor Experiencia
        </Typography>
        <div className='flex flex-row w-full justify-around max-h-fit py-5 '>
          {
            user.zones.map((zone, index) => (
              <p className={`flex px-5 py-1 rounded-full text-base ${colors[index]} font-bold text-white`}>
                {zone}
              </p>
            ))
          }
        </div>
        <Divider />
        <div className='flex flex-col gap-4'>
          <Typography variant='h6' color='black' fontWeight={600}>
            Estudios y Certificaciones
          </Typography>
          {
            user.career.map((career) => (
              <div key={career.name} className='flex flex-row gap-7 items-center'>
                <div className='w-12 h-12 rounded-md bg-gray-300' />
                <div className='flex flex-col gap-1'>
                  <Typography variant='h6' color='black' fontWeight={400}>
                    {career.name}
                  </Typography>
                  <Typography variant='body1' color='black' fontWeight={600}>
                    {career.school}
                  </Typography>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BrokerCard
