import FooterSteps from '../../components/footer/FooterSteps'
import NextButton from '../../components/commons/NextButton'
import Profile from '../../components/steps/Profile'
import Select from '../../components/steps/Select'
import Property from '../../components/steps/Property'
import { useState } from 'react'
import Map from '../../components/steps/Map'
import Info from '../../components/steps/Info'
import Expectations from '../../components/steps/Expectations'
import Loader from '../../components/loader/Loader'

const Register = () => {
  const [current, setCurrent] = useState(1)
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState('comprar')
  const forward = () => {
    if (current === 6) {
      setLoading(true)
      // setTimeout(() => {
      //   setLoading(false)
      // }, 2000)
      return
    }
    setCurrent(current + 1)
  }
  const back = () => {
    if (current === 1) return
    setCurrent(current - 1)
  }

  const renderStep = [
    <Profile key='step-1' />,
    <Select key='step-2' setType={setType} />,
    <Property key='step-3' />,
    <Map key='step-4' type={type} />,
    <Info key='step-5' />,
    <Expectations key='step-6' />
  ]
  return (
    <div className='flex flex-col relative justify-center items-center w-full h-screen'>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className='bg-white py-16 px-44 w-8/12 h-4/6 shadow-lg relative flex flex-col justify-center items-center'>
            {renderStep[current - 1]}
            <NextButton size={6} current={current} forward={forward} back={back} />
          </div>
          <FooterSteps />
        </>)}

    </div>
  )
}

export default Register
