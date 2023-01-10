import React from 'react';
import Icons from '../../assests/img/icons.svg';
import Image from 'next/image'

const Introducao = () => {
  return (
    <div id = "home" className="introducao" style={{ backgroundImage: `var(--background-intro)` }}>
      <div className="container-md container-fluid">
        <div className="row py-md-6 py-4 text-center text-md-start align-items-center d-md-flex d-grid">
          <div className="col">
            <h1 className='pb-3 cor-p1 fw-semibold'>Invista na sua empresa. Compre um site! </h1>
            <p className='pb-3 cor-10 fw-semibold'>
              Indicado para pequenas e médias empresas. Um site pode elevar seu negócio para outro nível, entre em contato para nos
              contar o que você precisa. 
            </p>
            <a target="_blank"rel="noreferrer noopener" href="https://wa.me/5511915647291" className="btn btn-primary cor-b-p2 cor-1 fw-bold shadow ">ENTRAR EM CONTATO</a>
          </div>
          <div className='col'>
            <Image width={'550px'} height={'340px' }src={Icons} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introducao;
