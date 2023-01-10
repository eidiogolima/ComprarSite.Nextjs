import React from 'react';
import Motors from '../../../assests/parceiros/motors.svg';
import Decora from '../../../assests/parceiros/decora.svg';
import Sixcode from '../../../assests/parceiros/six.svg';
const Parceiros = () => {
  return (
    <section className="cor-b-2 py-md-6 py-4">
      <div className="container-md container-fluid">
        <h1 className="fw-semibold mb-4 cor-p1 text-center">PARCEIROS</h1>
        <div className="row d-sm-flex d-grid gap-3 align-items-center mx-2 logo-parceiros text-center  align-items-center">
          <div className="col d-flex rounded p-3 cor-b-1 shadow justify-content-center">
            <a href="#trabalhos">
            <img width="175px" height="31px" src={Decora} alt="" />

            </a>
          </div>
          <div className="col d-flex justify-content-center rounded p-3 cor-b-1 shadow">
            {' '}
            <a href="#trabalhos">
              <img width="193px" height="57px" src={Motors} alt="" />
            </a>
          </div>
          <div className="col d-flex justify-content-center rounded p-3 cor-b-1 shadow">

            <a href="#trabalhos" >

            <img width="235px" height="49px" src={Sixcode} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parceiros;
