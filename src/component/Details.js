import React from 'react'
import {Button} from 'react-bootstrap';


function Details({Liste,match,history}) {
    console.log(history)
 
    const found=Liste.find((elem) => (elem.id == match.params.id))
    console.log(found)
   
    return (
        <div className="details">
            <h1>{found.title}</h1>
            <p>{found.description} </p>
         
            <h2>{found.rate}</h2>
            <h2> {found.trailer}</h2>
            <Button onClick={()=>history.goBack()}>Go back</Button>
            <Button onClick={()=>history.push('/')}>Home</Button>

   
            
        </div>
    )
}

export default Details
