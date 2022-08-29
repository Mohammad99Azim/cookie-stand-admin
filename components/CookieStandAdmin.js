import styles from '../styles/Home.module.css'
import {useState}  from 'react';

import Head from 'next/head'
import Header from './Header'
import CreateForm from '../components/CreateForm'
import ReportTable from './ReportTable'
import Footer from '../components/Footer'



const CookieStandAdmin = () => {
    const [data,setValue] = useState([]);

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
        
            <CreateForm setValue={setValue} data={data} />
            <ReportTable data ={data}/>
    
        </main>
      </div>
      <footer className= {styles.footer}>
        <Footer data ={data}/>
      </footer>
        </>
    );
}

export default CookieStandAdmin;
