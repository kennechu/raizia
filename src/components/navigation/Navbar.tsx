import { Link } from "wouter";
import { RaiziaLogo } from "../icons/Icons";
import { useState } from "react";
import Button from "../buttons/Button";

const Navbar = () => {
  const [burger, setBurger] = useState(true)

  const toggleBurger = () => {
    setBurger(!burger)
  }

  return (
    <>
      <nav className="relative px-5 py-5 flex justify-between items-center bg-secondary-color">
        <a className="text-3xl font-bold leading-none" href="/">
          <RaiziaLogo color='white' width='7rem' />
        </a>
        <div className="lg:hidden mr-10">
          <button className="flex items-center text-white p-3" onClick={toggleBurger}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li><a className="text-base text-white hover:brightness-90 hover:scale-110 transition-all duration-300 ease-in-out" href='#how-it-works'>¿Cómo funciona?</a></li>
          <li><a className="text-base text-white hover:brightness-90 hover:scale-110 transition-all duration-300 ease-in-out" href='#about-us'>¿Cómo sé que es seguro?</a></li>
        </ul>
        <div className={`hidden lg:flex lg:flex-row gap-5 mr-20`}>
          <Link href='/login'>
            <Button outlined>
              Registrarse como asesor
            </Button>
          </Link>
          <Link href='/login'>
            <Button>
              Encuentra a tu asesor
            </Button>
          </Link>
        </div>
      </nav>
      <div className={`relative z-50 ${burger ? 'hidden' : ''} `}>
        <div className="fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto font-bold leading-none" href="/">
              <RaiziaLogo color='black' width='7rem' />
            </a>
            <button onClick={toggleBurger}>
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a className="block p-4 text-base font-semibold text-secondary-color hover:bg-blue-50 hover:text-blue-600 rounded" href='#how-it-works'>¿Cómo funciona?</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-base font-semibold text-secondary-color hover:bg-blue-50 hover:text-blue-600 rounded" href='#about-us'>¿Cómo sé que es seguro?</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-base font-semibold text-secondary-color hover:bg-blue-50 hover:text-blue-600 rounded" href='/login'>Iniciar Sesión</a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
