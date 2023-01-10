import React from 'react';
import DecoradorBg from '../../assests/img/background/icon-2.svg'
import Image from 'next/image';
const Duvidas = () => {
  return (
    <section id = "duvidas" className="cor-b-p1 py-sm-6 py-4 position-relative">
      <Image className='d-none d-sm-block position-absolute top-0' src={DecoradorBg} style={{'width':'auto'}} alt="" />
      
      <div className="container-md container-fluid">
        <h1 className='cor-1 text-center mb-4'>FAQ - DUVIDAS </h1>
        <div className="row">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header " id="panelsStayOpen-headingOne ">
                <button
                  className="accordion-button cor-p1 fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Por que ter um site?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body cor-b-p1 cor-3">
                Um site é um investimento que você faz para seu negócio ter mais visibilidade. O diferencial de comprar conosco, é que, ele terá uma otimização excelente para pontuar bem no (Google) assim posicionar acima de seus concorrentes que tem um site mal otimizado ou não possuem site.   
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header " id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed cor-p1 fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Quem produz?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body cor-b-p1 cor-3">
                Somos uma agência especializada em desenvolvimento/criação de site e web design, temos uma equipe de programadores e designers profissionais capacitados para realizar a função. Não perca essa oportunidade de investir em um site com a gente. 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed cor-p1 fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Seu site será único?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body cor-b-p1 cor-3">
                Sim, o nosso diferencial é que fazemos a parte do design do site, ou seja, ele será único na internet inteira, chamando assim mais atenção e exclusividade para seu negócio. E de bônus te consultamos durante a produção e também no início do site, para saber sua opinião sobre as cores e design
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Duvidas;
