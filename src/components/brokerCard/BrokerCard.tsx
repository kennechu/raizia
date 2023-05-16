import { Divider } from "@mui/material"
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
    <div className='flex flex-col xl:max-w-7xl w-full gap-2 px-5 xl:px-0 xl:gap-10'>
      <div className='flex flex-col xl:flex-row gap-4 xl:gap-10 w-full xl:max-w-7xl h-fit'>
        <div className='flex flex-col xl:flex-row gap-8 bg-white rounded-lg xl:shadow-lg items-center w-full xl:max-w-lg h-full px-7 xl:p-10 cursor-default'>
          <img src={user.avatar} alt={user.name} className='rounded-full w-28 h-28 p-0 m-0' />
          <div className='flex flex-col justify-center items-start gap-3'>
            <h3 className='text-2xl font-bold xl:text-4xl'>
              {user.name}
            </h3>
            <p className='text-lg text-gray-700 '>
              {user.presentation}
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 justify-center '>
          {
            user.importants.map((important) => (
              <div key={important.description} className='flex flex-row gap-10 p-7 items-center bg-white  rounded-lg xl:shadow-lg'>
                <h3 className='text-2xl font-bold xl:text-4xl'>
                  {important.time}
                </h3>
                <h3 className='text-base xl:text-xl'>
                  {important.description}
                </h3>
              </div>
            ))
          }
        </div>
        <div className='hidden xl:flex flex-col gap-3 rounded-lg bg-white xl:shadow-lg p-4 justify-around '>
          <div className='flex flex-row gap-4 items-center'>
            <FacebookRounded htmlColor="#072726" />
            <h3 className='text-lg xl:text-xl'>
              {user.social.facebook}
            </h3>
          </div>
          <div className='flex flex-row gap-4 items-center'>
            <Instagram htmlColor="#072726" />
            <h3 className='text-lg xl:text-xl'>
              {user.social.instagram}
            </h3>
          </div>
          <div className='flex flex-row gap-4 items-center'>
            <LinkedIn htmlColor="#072726" />
            <h3 className='text-lg xl:text-xl'>
              {user.social.linkedin}
            </h3>
          </div>
          <div className='flex flex-row gap-4 items-center'>
            <ChromeReaderMode htmlColor="#072726" />
            <h3 className='text-lg xl:text-xl'>
              {user.social.blog}
            </h3>
          </div>
        </div>
      </div>

      <div className='flex flex-col bg-white rounded-lg xl:shadow-lg w-full p-10 '>
        <h3 className='text-xl font-bold xl:text-2xl'>
          Zona de Mayor Experiencia
        </h3>
        <div className='flex flex-row w-full justify-around max-h-fit py-5 '>
          {
            user.zones.map((zone, index) => (
              <p className={`flex px-2 py-1 xl:px-5 xl:py-1 rounded-full text-xs xl:text-base ${colors[index]} font-bold text-white ${index > 3 ? 'hidden xl:flex' : ''}`}>
                {zone}
              </p>
            ))
          }
        </div>
        <Divider />
        <div className='flex flex-col gap-4'>
          <h3 className='text-xl font-bold xl:text-2xl'>
            Estudios y Certificaciones
          </h3>
          {
            user.career.map((career) => (
              <div key={career.name} className='flex flex-row gap-7 items-center'>
                <div className='w-12 h-12 rounded-md bg-gray-300' />
                <div className='flex flex-col gap-1'>
                  <h3 className='text-base xl:text-xl'>
                    {career.name}
                  </h3>
                  <h3 className='text-lg font-bold xl:text-xl'>
                    {career.school}
                  </h3>
                </div>
              </div>
            ))
          }
        </div>
        <div className='xl:hidden flex flex-row gap-3 pt-5 text-blue-950'>
          <FacebookRounded />
          <Instagram />
          <LinkedIn />
          <ChromeReaderMode />
        </div>
      </div>
    </div>
  )
}

export default BrokerCard
