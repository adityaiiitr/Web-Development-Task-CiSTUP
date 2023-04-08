import React from 'react'

import db0 from "../data/sample_db_0km.json"
import db5 from "../data/sample_db_5km.json"
import db10 from "../data/sample_db_10km.json"
import db15 from "../data/sample_db_15km.json"
import db20 from "../data/sample_db_20km.json"
import db25 from "../data/sample_db_25km.json"


const Mode = () => {

    const q1=1;
    const q2=3;

    
    const Data = db5.Data;
    console.log(Data)
  return (
    
    <div className='flex justify-center grid content-center'>
        <table className="border-collapse border-2 border-gray-500">
        <thead>
            <tr>
            <th className="border border-gray-500 p-2 bg-red-500">{Data[0].mode_1}</th>
            <th className="border border-gray-500 p-2 bg-blue-500">{Data[0].mode_2}</th>
            <td className="border border-gray-500 p-2 bg-yellow-500">{Data[0].mode_4}</td>
            <td className="border border-gray-500 p-2 bg-purple-500">{q1===3?Data[0].mode_8:Data[0].mode_9}</td>
            <td className="border border-gray-500 p-2 bg-green-500">{q1===5?Data[0].mode_7:Data[0].mode_5}</td>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500">Row 1</th>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500"></th>
            
            </tr>
           
            <tr>
            <th className="border border-gray-500 p-2 bg-red-500">{Data[0].mode_1.trans==0}</th>
            <th className="border border-gray-500 p-2 bg-blue-500">{Data[0].mode_2}</th>
            <td className="border border-gray-500 p-2 bg-yellow-500">{Data[0].mode_4}</td>
            <td className="border border-gray-500 p-2 bg-purple-500">{q1===3?Data[0].mode_8:Data[0].mode_9}</td>
            <td className="border border-gray-500 p-2 bg-green-500">{q1===5?Data[0].mode_7:Data[0].mode_5}</td>
            </tr>
            <tr>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500">Row 2</th>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500"></th>
            
            </tr>
            <tr>
            <th className={`border border-gray-500 p-2 bg-red-300`}>Header 1</th>
            <th className="border border-gray-500 p-2 bg-blue-300">Header 2</th>
            <td className="border border-gray-500 p-2 bg-yellow-300">Header 3</td>
            <td className="border border-gray-500 p-2 bg-purple-300">Header 4</td>
            <td className="border border-gray-500 p-2 bg-green-300">Header 5</td>
            </tr>
            <tr>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500">Row 3</th>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500"></th>
            
            </tr>
            <tr>
            <th className={`border border-gray-500 p-2 bg-red-300`}>Header 1</th>
            <th className="border border-gray-500 p-2 bg-blue-300">Header 2</th>
            <td className="border border-gray-500 p-2 bg-yellow-300">Header 3</td>
            <td className="border border-gray-500 p-2 bg-purple-300">Header 4</td>
            <td className="border border-gray-500 p-2 bg-green-300">Header 5</td>
            </tr>
            <tr>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500">Row 4</th>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500"></th>
            
            </tr>
            <tr>
            <th className={`border border-gray-500 p-2 bg-red-300`}>Header 1</th>
            <th className="border border-gray-500 p-2 bg-blue-300">Header 2</th>
            <td className="border border-gray-500 p-2 bg-yellow-300">Header 3</td>
            <td className="border border-gray-500 p-2 bg-purple-300">Header 4</td>
            <td className="border border-gray-500 p-2 bg-green-300">Header 5</td>
            </tr>
            <tr>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500">Row 5</th>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500"></th>
            
            </tr>
            <tr>
            <th className={`border border-gray-500 p-2 bg-red-300`}>Header 1</th>
            <th className="border border-gray-500 p-2 bg-blue-300">Header 2</th>
            <td className="border border-gray-500 p-2 bg-yellow-300">Header 3</td>
            <td className="border border-gray-500 p-2 bg-purple-300">Header 4</td>
            <td className="border border-gray-500 p-2 bg-green-300">Header 5</td>
            </tr>
            <tr>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500">Row 6</th>
            <th className="p-2 bg-white-500"></th>
            <th className="p-2 bg-white-500"></th>
            
            </tr>
            <tr>
            <th className={`border border-gray-500 p-2 bg-red-300`}>Header 1</th>
            <th className="border border-gray-500 p-2 bg-blue-300">Header 2</th>
            <td className="border border-gray-500 p-2 bg-yellow-300">Header 3</td>
            <td className="border border-gray-500 p-2 bg-purple-300">Header 4</td>
            <td className="border border-gray-500 p-2 bg-green-300">Header 5</td>
            </tr>
        </tbody>
        </table>

    </div>
  )
}

export default Mode