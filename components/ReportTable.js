

export default function ReportTable(data) {
    
  return (
          <>
      <div className="mt-16 font-medium text-center">
      <h3>{ data["data"].length < 1 ?  "No Cookie Stands Available":"" }</h3>  
             {
            
            data["data"].length >= 1 &&

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
                data["data"].map((item, index)=>{
                return(
                    <tr key={index} className="bg-green-300 border-solid" >
                    <td className="p-2 text-left w-11">{item[14]}</td>
                        <td className="p-2 text-left border border-slate-800">{item[0]}</td>
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
                        
                        <td className="p-2 text-left border border-slate-800">{}</td>
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
