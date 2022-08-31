 import React from 'react'

 import { AuthContext } from '../contexts/Auth';
 import { useContext , useState } from 'react';
 
 
 
 export default function LoginForm() {
    // const [userInfo, setUserInfo] = useState({});
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    const url = "https://cookie99stand99api.herokuapp.com/api/v1/cookie-stand/"
    
    const  {login} = useContext(AuthContext);
    
    
   function handleSubmit(e){
        e.preventDefault();
        // setUserInfo(
        //     {
        //     username:e.target.username.value, 
        //     password:e.target.password.value,
        //         })
                
        // setTimeout(() => {
        //     login({username,
        //            password,})
        //     }, 5000);

        login({
            username,
            password
        });
    }


    function handleUserName(e) {
        setUserName(e.target.value);
    }
    function handleUserPassword(e) {
        setPassword(e.target.value)
    }



    
   return (
    <div className="w-full max-w-xs mx-auto mt-24">
    <form className="px-8 pt-6 pb-8 mb-4 bg-green-300 rounded shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" forHtml="username">
          Username
        </label>
        <input onChange={handleUserName} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-bold text-gray-700" forHtml="password">
          Password
        </label>
        <input onChange={handleUserPassword} className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      </div>
      <div className="flex items-center justify-between">
        <input className="px-16 py-2 mx-auto font-bold text-white bg-green-800 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit" value="Sign In"/>
          
        
      </div>
    </form>
    <p className="text-xs text-center text-gray-500">
    </p>
  </div>
   )
 }
 