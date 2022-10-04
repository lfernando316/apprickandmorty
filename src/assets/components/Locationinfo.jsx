import React from 'react'
import './styles/locationInfo.css'

const Locationinfo = ({location}) => {
  return (
    <article className='card__container'>
        <h2 className='card__litem'><span className='card__lspan'>Name: </span>{location?.name}</h2>
        
            <h2 className='card__litem'><span className='card__lspan'>Type: </span>{location?.type}</h2>
            <h2 className='card__litem'><span className='card__lspan'>Dimension: </span>{location?.dimension}</h2>
            <h2 className='card__litem'><span className='card__lspan'>Population: </span>{location?.residents.length}</h2>
        
    </article>
  )
}

export default Locationinfo