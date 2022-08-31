import axios from "axios";
import useSWR from "swr";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../contexts/Auth";
import { useContext , useState } from 'react';


 const url = "https://cookie99stand99api.herokuapp.com/api/v1/cookie-stand/"

export default function ReportTable({value}) {

    const { token } = useContext(AuthContext)
    console.log('table created')
    const config = {
        headers: {
            'Authorization': `Bearer ${token.access}`
        }
    }
    
    console.log(config)
    const fetcher = url => axios.get(url, config).then(res => res.data)
    const { data, error } = useSWR(url,fetcher);
      
      
    if (token && !data) return <div>loading... 
        
<div role="status">
    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
    </svg>
    <span className="sr-only">Loading...</span>
</div>

    </div>
    console.log( data );

    let newData = data.map(item =>{
        let hours =[item["location"]]
        let sum = 0
        for (let i = 1; i <= 14; i++) {
            let number = Math.floor(Math.random() * (item["minimum_customers_per_hour"] - item["maximum_customers_per_hour"] + 1)) + item["minimum_customers_per_hour"];
            sum +=number
            hours.push(number)
          }
        hours.push(sum)
        return hours;
    })
    
    



  return (
          <>

      <div className="mt-16 font-medium text-center">
      <h3>{newData.length < 1 ?  "No Cookie Stands Available":"" }</h3>  
             {
            
            newData.length >= 1 &&

            <table className="w-5/6 border-collapse ">
            <tr className="bg-green-600 border-solid">
                <th className="p-2 text-left w-11">Location</th>
                <th className="p-2 text-left">6am</th>
                <th className="p-2 text-left">7am</th>
                <th className="p-2 text-left">8am</th>
                <th className="p-2 text-left">9am</th>
                <th className="p-2 text-left">10am</th>
                <th className="p-2 text-left">11am</th>
                <th className="p-2 text-left">12pm</th>
                <th className="p-2 text-left">1pm</th>
                <th className="p-2 text-left">2pm</th>
                <th className="p-2 text-left">3pm</th>
                <th className="p-2 text-left">4pm</th>
                <th className="p-2 text-left">5pm</th>
                <th className="p-2 text-left">6pm</th>
                <th className="p-2 text-left">7pm</th>
                <th className="p-2 text-left">Totals</th>

            </tr>

            {
                newData.map((item, index)=>{
                return(
                    <tr key={index} className="bg-green-400 border-solid odd:bg-green-300" >
                    <td className="w-48 p-2 text-left">  
                    <FontAwesomeIcon icon={faTrashCan} style={{ fontSize: 15, color: "orange" }} />
                    {item[0]}
                    </td>
                        <td className="p-2 text-left border border-slate-800">{item[1]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[2]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[3]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[4]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[5]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[6]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[7]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[8]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[9]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[10]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[11]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[12]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[13]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[14]}</td>
                        
                        <td className="p-2 text-left border border-slate-800">{item[15]}</td>
                    </tr>
                    
                    )
                })
            }
            <tr className="bg-green-600 border-solid" >
                    <td className="p-2 font-bold text-left text-center w-11 ">Totals</td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left"></td>
                        <td className="p-2 text-left">Totals</td>
                    </tr>
                </table>
                
                
            }


    </div>
        

     </>
  )
}
