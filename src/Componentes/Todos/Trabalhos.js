import React from 'react';
// Fotos
import Fotoimoverl1 from '../../assests/img/carrosel/imovel.webp';
import Fotoimoverl2 from '../../assests/img/carrosel/imovel-2.webp';
import Fotoimoverl3 from '../../assests/img/carrosel/imovel-3.webp';
import Fotodecora1 from '../../assests/img/carrosel/decora.webp';
import Fotodecora2 from '../../assests/img/carrosel/decora-2.webp';
import Fotodecora3 from '../../assests/img/carrosel/decora-3.webp';
import Fotomotor1 from '../../assests/img/carrosel/motor.webp';
import Fotomotor2 from '../../assests/img/carrosel/motor-2.webp';
import Fotomotor3 from '../../assests/img/carrosel/motor-3.webp';
// Fim Fotos



import Carrosel from '../../Ultilidades/Carrosel';
import Carrosel2 from '../../Ultilidades/Carrosel2';
import Carrosel3 from '../../Ultilidades/Carrosel3';

const Trabalhos = () => {
  return (
    <section id = "trabalhos" className="cor-b-3 py-md-6 py-4">
      <div className="container-md container-fluid ">
        <h1 className="cor-p1 text-center mb-4 fw-semibold">SITES RECENTES</h1>
        <div className=" d-sm-flex d-grid gap-4">
          <div className="col">
            <Carrosel
              img1={Fotoimoverl1}
              img2={Fotoimoverl2}
              img3={Fotoimoverl3}
            />
          </div>

          <div className="col">
            <Carrosel2 img1={Fotomotor1} img2={Fotomotor2} img3={Fotomotor3} />
          </div>

          <div className="col">
            <Carrosel3
              img1={Fotodecora1}
              img2={Fotodecora2}
              img3={Fotodecora3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trabalhos;
