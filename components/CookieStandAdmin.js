import styles from '../styles/Home.module.css'
import {useState}  from 'react';

import Head from 'next/head'
import Header from './Header'
import CreateForm from '../components/CreateForm'
import ReportTable from './ReportTable'
import Footer from '../components/Footer'



const CookieStandAdmin = () => {
  const [value, setValue] = useState('')

    return (
        <>
        <Head>
        <title>Cookie Stand Admin</title>
        <meta name="description" content="Cookie Stand Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='w-full'>
       <Header />
      </header>

      <div className= "min-h-screen">
        <main className={styles.main}>
        
            <CreateForm setValue={setValue} />
            <ReportTable value={value}/>
    
        </main>
      </div>
      <footer className= {styles.footer}>
        <Footer/>
      </footer>
        </>
    );
}

export default CookieStandAdmin;
