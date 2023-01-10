import React from 'react';

const ModalAlert = () => {
  const [timer, setTimer] = React.useState(false);
  const minutoAleatorio = Math.floor(Math.random() * (20 - 2) + 1);
  const pessoaAleatorio = Math.floor(Math.random() * (5 - 2) + 2);

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 4000);

    if (timer) {
      setTimeout(() => {
        setTimer(false);
      }, 10000);
    }
  }, [timer]);

  return (
    <>
      {timer && timer ? (
        <div
          id="index"
          className="position-fixed p-2 p-sm-3 cor-b-1 rounded shadow bottom-0 mx-4 mb-4 z-3 modal "
        >
          <div>
            {' '}
            <h6>+ {pessoaAleatorio} Pessoas compraram um site </h6>
            <span>{minutoAleatorio} min atrás...</span>{' '}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ModalAlert;
