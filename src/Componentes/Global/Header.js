import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from '../../assests/icons/esfera-header.svg'
import Logo from '../../assests/public/logo.svg'

const Header = () => {
  return (
    <header className='cor-b-1 shadow py-2 border'>
      <nav className="navbar navbar-expand-md bg-light d-flex container-md-fluid container-xl p-2 justify-content-between">
        <Link href='/' aria-label="Navegar para home">
          <Image width ="285px" height='34px' style={{"width": '200px'}} src={Logo} alt="Home-site" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarSupportedContent"
          className="collapse navbar-collapse flex-grow-0"
        >
          <ul className="d-flex navbar-nav align-item-center">
            <li className="nav-item">
              <a className="nav-link fw-semibold cor-11" href="#trabalhos">
                PROJETOS
              </a>
            </li>

            <li className='d-none d-md-flex mx-2'>
              <Image width='16px' height="16px" src={Icon} alt="" />
            </li>

            <li className="nav-item fw-semibold ">
              <a className="nav-link cor-11" href="#duvidas">
                FAQ
              </a>
            </li>

            <li className='d-md-flex mx-2 me-3 d-none'>
              <Image width='16px' height="16px" src={Icon} alt="" />
            </li>

            <li className="nav-item ">
              <a className="nav-link cor-11 fw-semibold "target="_blank"rel="noreferrer noopener" href={`https://wa.me/5511930648828`}>
                CONTATO
              </a>
            </li>

            <li className='d-md-flex mx-2 me-3 d-none'>
              <Image width='16px' height="16px" src={Icon} alt="" />
            </li>

            <li className="nav-item shadow-sm">

              
              <a className="nav-link btn btn-primary  text-white fw-semibold "target="_blank"rel="noreferrer noopener" href={"https://wa.me/5511930648828"}>

              (11) 93064-8828
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header