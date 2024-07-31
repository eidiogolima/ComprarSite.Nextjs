import emailjs from '@emailjs/browser';
import Image from 'next/image';
import React from 'react';
import Iconmail from '../../assests/icons/email.svg';
import Instagram from '../../assests/icons/ig.svg';
import Whats from '../../assests/icons/wp.svg';

const Contato = () => {
  const [numero, setNumero] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [error, setError] = React.useState('');
  const [status, setStatus] = React.useState('');

  const templateParams = {
    from_name: nome,
    phone: numero,
  };
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .send(
        'service_7qrmaem',
        'template_hc58owe',
        templateParams,
        'nYJsEEAKzp5XJTPUn',
      )
      .then(
        (res) => {
          setStatus('Enviado com sucesso', res)
          setError(false)
          setNome('');
          setNumero('');
        },
        (err) => {
          setError(true)
          setError('Ocorreu um erro ao enviar.', err)
        },
      );
  };

  return (
    <section className="cor-b-1 " id="contato">
      <div className="container-xl  container-fluid position-relative z-2 py-md-6 py-4">
        <div className="row d-grid d-md-flex align-items-center cor-b-1 shadow rounded p-2 p-md-5 py-4 mx-2 mx-sm-0">
          <div className="col ">
            <h1 className="cor-p1 mb-4 fw-bold">Vamos conversar?😉</h1>
            <h2 className="cor-8 mb-3">Tire a sua ideia do papel</h2>
            <p className="cor-8 fw-semibold mb-4">
              Deixe seu nome e numero de celular para entrarmos em contato. (Fique tranquilo, não compartilhamos seus dados com ninguém){' '}
            </p>

            <ul className="d-grid gap-3 mb-3 mb-md-0">
              <li >
                {' '}
                <a className = "listImportant"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://wa.me/5511930648828"
                >
                  <Image style={{ width: 'auto' }} src={Whats} alt="" />
                  <p className="cor-7 fw-semibold align-self">
                    +55 11 91564-7291
                  </p>
                </a>
              </li>

              <li>
                <a className="listImportant" href="mailto:eidiogoadm@gmail.com">
                  <Image style={{ width: 'auto' }} src={Iconmail} alt="" />
                  <p className="cor-7 fw-semibold align-self-center">
                    eidiogoadm@gmail
                  </p>
                </a>
              </li>

              <li>
                {' '}
                <a
                  className="listImportant"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://instagram.com/comprarsite/"
                >
                  {' '}
                  <Image style={{ width: 'auto' }} src={Instagram} alt="" />
                  <p className="cor-7 fw-semibold">@comprarsite</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <form
              onSubmit={sendEmail}
              className="p-3 p-md-4 cor-b-p1 cor-2 shadow rounded"
            >
              <div className="mb-3 ">
                <div className="row d-grid d-sm-flex">
                  <div className="mt-3">
                    <label className="form-label fw-bold cor-1">Nome</label>
                    <input
                      onChange={({ target }) => setNome(target.value)}
                      placeholder="Seu nome"
                      type="text"
                      required={true}
                      className="form-control"
                      aria-describedby="Nome"
                    />
                  </div>
                </div>
                <div className="row d-grid d-sm-flex">
                  <div className="mt-3">
                    <label className="form-label fw-bold cor-1">
                      Celular (WhatsApp)
                    </label>
                    <input
                      onChange={({ target }) => setNumero(target.value)}
                      name="celular"
                      required={true}
                      placeholder="(11) 99999-9999"
                      type="text"
                      className="form-control"
                      aria-describedby="Celular"
                    />
                  </div>
                </div>
              </div>

              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <div className="mb-3">
              {status && status ? <div className='cor-b-1 p-2 cor-p1 fw-bold text-center rounded mb-3'> Dados enviados <span ></span></div> : '' }
                
                <div><span>{error && error}</span></div>
                <span className="fw-semibold cor-3">
                  Respostas em menos de 1 hora{' '}
                </span>
              </div>
              <button type="submit" className="btn btn-primary fw-semibold">
                ENVIAR
              </button>
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_7be0dd65ca351019069992978_0a9348f331"
                  tabIndex="-1"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
