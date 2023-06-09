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
import Policy from '../../components/steps/Policy'

const Register = () => {
  const [current, setCurrent] = useState(1)
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState('comprar')
  const [last, setLast] = useState(false)
  const forward = () => {
    if (current === 6) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 3000)
      setCurrent(current + 1)
      setLast(true)
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
    <Expectations key='step-6' />,
    <Policy key='step-7' />,
  ]
  return (
    <div className='flex flex-col relative justify-between md:justify-around items-center w-full h-screen bg-white lg:bg-background-color'>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className='bg-white lg:py-16 lg:px-44 lg:w-8/12 h-5/6 lg:shadow-lg relative flex flex-col justify-center items-center text-center'>
            {renderStep[current - 1]}
            <NextButton size={6} current={current} forward={forward} back={back} last={last} />
          </div>
          <FooterSteps />
        </>)}

    </div>
  )
}

export default Register
