import React from 'react';
import SEO from '../../assests/img/seo.svg';
import Chave from '../../assests/img/chave.svg';
import Desempenho from '../../assests/img/desempenho.svg';
import Destaque from '../../assests/img/destaque.svg';
import Image from 'next/image';
const Beneficios = () => {
  return (
    <section className="cor-b-p1 py-md-6 py-4">
      <div className="container-xl container-fluid">
        <div className="row  text-center text-md-start align-items-center d-md-flex d-grid">
          <div className="col">
            <Image width="550px" height="340px" src={Destaque} alt="" />
          </div>
          <div className="col">
            <h1 className="pb-3 cor-1 fw-semibold mt-md-0 mt-3">Destaque-se </h1>
            <p className="pb-3 cor-3 fw-semibold">
              Utilizamos das melhores técnicas do mercado para sua empresa.
              Levantando seu site em primeiro nas pesquisas da sua região. Gerando muitas oportunidades de vendas para o seu negócio.
            </p>
            

            <div className="row ">

              <h2 className='cor-2 '>Métricas que levam para cima</h2>
              
              <div className="col mt-3">
                <Image width="550px" height="340px" src={Desempenho} alt="" />
              </div>

              <div className="col mt-3">
                <Image width="550px" height="340px" src={Chave} alt="" />
              </div>

              <div className="col mt-3">
                <Image width="550px" height="340px" src={SEO} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
