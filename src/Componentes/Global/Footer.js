import React from 'react';
import Seta from '../../assests/icons/cima.svg'
import Image from 'next/image';
const Footer = () => {
  const [ano, setAno] = React.useState('');
  const dataAtual = new Date();

  const anoAtual = dataAtual.getFullYear();

  React.useEffect(() => {
    setAno(anoAtual);
  }, [anoAtual]);

  return (
    <footer className="cor-b-12">
      <div className="container-md container-fluid text-center py-3">
        <div className='d-flex justify-content-center gap-4 flex-wrap'>
           <span className="cor-3 ">
          ©{ano} Comprar site - Todos os direitos reservados{' '}
        </span>
        <div>

          <a href="#home" aria-label="Voltar para o inicio">

          <Image width='30px' height="15px" className='cor-b-1 p-1 rounded' src={Seta} alt="" />
          </a>

        </div>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
