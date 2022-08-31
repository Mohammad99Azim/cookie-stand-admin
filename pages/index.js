import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { AuthContext } from '../contexts/Auth' //1. importing the context that has your global state
import { useContext } from 'react' // 2
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'


export default function Home() {
  const  {token} = useContext(AuthContext); // 3
  console.log("global state coming form Context", token)
  return (
    <> 
      {
      (token) ? <CookieStandAdmin></CookieStandAdmin> : <LoginForm></LoginForm>
      }
    </>
  )
}
