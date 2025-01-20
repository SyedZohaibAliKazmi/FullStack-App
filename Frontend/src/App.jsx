import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [userData, setuserData] = useState([])


  useEffect(()=>{
    axios.get(`/api/data`)
    .then((response)=>{
       setuserData(response.data)
 
    })
    .catch((error)=>{
      console.log("error=>",error);
      
    })
  })
  return (
    <div>
    <h1>FullStack Application</h1>
    <p>UserData:{userData.length}</p>

    {
      userData.map((data,index)=>(
        <div key={data.id}>
          <h2>{data.name}</h2>
          <h4>{data.age}</h4>
          <h4>{data.phone}</h4>
        </div>
      ))
    }
    </div>
  )
}

export default App
