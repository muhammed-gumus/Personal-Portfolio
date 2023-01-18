import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Navbar from '../components/navbar'
import Banner from '../components/banner'


export default function Home () {
  return (
    <div>
     <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        ></link>
        <title>Muhammed Gümüş</title>
      </Head>
      <Navbar/>
      <Banner/>
    </div>
  )
}
