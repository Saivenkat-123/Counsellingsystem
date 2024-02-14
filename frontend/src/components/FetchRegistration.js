import React, { useState } from 'react'
import axios from 'axios'

const FetchRegistrations = () => {
 const [res, setRes] = useState(null)
 if(res==null){
 axios.get('http://localhost:8080/retrieve',{})
 .then(response=>{
    setRes(response.data)
    console.log(Response.data)
 })
}
  return (
    <div><h1>Registrations</h1>
    {JSON.stringify(res)}
    </div>
  )

}
export default FetchRegistrations
