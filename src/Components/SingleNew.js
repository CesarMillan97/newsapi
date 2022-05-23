import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleNew() {
   const params = useParams()
   console.log(params);
   
   return (
    <div>
       <h1>Single New</h1>
    </div>
  )
}
