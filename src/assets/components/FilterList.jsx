import React from 'react'

const FilterList = ({suggestedlist,setSearchInput}) => {
    console.log(suggestedlist)

    const handleClick = id => setSearchInput(id)
        
  return (
    <ul className='ul__filter'>
        {
          suggestedlist?.map(location => (
            <li className='list__item' onClick={() => handleClick(location.id)} key={location.id}>{location.id} {location.name}</li>
          ))    
        }
    </ul>
  )
}

export default FilterList