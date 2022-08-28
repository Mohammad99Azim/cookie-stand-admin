import React, { useState } from 'react';



export default function Form(){
    const [data,setdata] = useState([])

    function handleFormSubmit(e){
        e.preventDefault()
        let the_data ={
            "location": e.target.location.value,
            "minCustomers": e.target.minimum.value,
            "maxCustomers": e.target.maximum.value,
            "avgCookies": e.target.average.value,
        }
        setdata([the_data]);
    }

    return(
        <>
        <div className="w-5/6 p-6 bg-green-300 rounded-md">
        <form onSubmit={handleFormSubmit}>
            <div>
                <div className="flex items-center justify-center mb-5">
                    <h3 className="font-medium">Create Cookie Stand</h3>
                </div>
 
                <div className="flex mb-5 ">
                    <label  htmlFor="location">Location:</label>
                    <input className="w-full ml-1" type="text" name="location" id="location" />
                </div>

                <div className="flex flex-wrap justify-between">
                    <div className="w-56 text-center">    
                        <label className="text-xs font-medium"  htmlFor="minimum">Minimum Customers per Hour:</label>
                        <input className="w-full" type="text" name="minimum" id="minimum" />
                    </div>
                    <div className="w-56 text-center">
                        <label className="text-xs font-medium" htmlFor="maximum">Maximum Customers per Hour:</label>
                        <input className="w-full" type="text" name="maximum" id="maximum" />
                    </div>

                    <div className="w-56 text-center">
                        <label className="text-xs font-medium" htmlFor="average">Average Customers per Hour:</label>
                        <input className="w-full" type="text" name="average" id="average" />
                    </div>
                    
                    <div className="w-40">
                        <input className="px-16 py-3 mt-1 font-medium bg-green-600" type="submit" value="Create" />
                    </div>
                </div>

            </div>

        </form>
        </div>

        <div className="mt-16 font-medium text-center text-gray-500">
            <h4>Report Table Coming Soon...</h4>
            {
                data.map((item, index)=>{
                    return(
                        <p  key={index} className="mt-8"> {"{"}"location":"{item["location"]}",minCustomers":{item["minCustomers"]},maxCustomers":{item["maxCustomers"]},"avgCookies":{item["avgCookies"]}{"}"}</p>
                    )
                })
            }
           
        </div>
        </>
    )
} 