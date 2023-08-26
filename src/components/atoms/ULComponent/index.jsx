import React from 'react'

const ULComponent = ({title,data}) => {
  return (
    <div>
        <h3>{title}</h3>
        <ul>
            {data.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        
    </div>
  )
}

export default ULComponent