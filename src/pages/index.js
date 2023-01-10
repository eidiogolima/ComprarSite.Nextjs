import Head from 'next/head'
/* Global */
import Header from '../Componentes/Global/Header'
import Footer from '../Componentes/Global/Footer'

/* All Components */
import Introducao from '../Componentes/Todos/Introducao'
import Beneficios from '../Componentes/Todos/Beneficios'
import Contato from '../Componentes/Todos/Contato'
import Duvidas from '../Componentes/Todos/Duvidas'



import Script from 'next/script'
import Trabalhos from '../Componentes/Todos/Trabalhos'

export default function Home() {
  return (
    <>
      <Head>
        <title>Comprar Site | Home</title>
        <meta name="description" content="Comprar sites nunca foi tão fácil, tenha seu site feito por um desenvolvedor de site/web e profissional da area." />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C147E9"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type = "image/png" sizes = "16x16"href="/static/favicon.png" />

        

      </Head>
      <main>
        <Header/>
        <Introducao/>
        <Beneficios/>
        <Contato/>
        <Trabalhos/>
        <Duvidas/>
        <Footer/>
      </main>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  )
}
