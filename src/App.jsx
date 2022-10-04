import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './assets/components/CardResident'
import ErrorScreen from './assets/components/ErrorScreen'
import FilterList from './assets/components/FilterList'
import Locationinfo from './assets/components/Locationinfo'
import getRandomNumber from './assets/utils/getRandomNumber'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState()
  const [suggestedlist, setSuggestedList] = useState()
  const [hasError, setHasError] = useState(false)

 /*  console.log(searchInput) */

  useEffect(() => {
    let id= getRandomNumber()
    if(searchInput) {
      id= searchInput
    }

    const URL= `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)})
      .catch(err => setHasError(true))  
  }, [searchInput])

  /* console.log(location) */
  
  const handleSubmit = event => {
    event.preventDefault()
    setSearchInput(event.target.idlocation.value)
  }
  
  const handleChange = event => {
    if(event.target.value === ""){
      setSuggestedList()
    }else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

      axios.get(URL)
        .then(res => setSuggestedList(res.data.results))
        .catch(err => console.log(err))
    }
  }


  /* console.log(setSuggestedList) */
  
  return (
    <div className="App">
      <div className='header__container'>
      <img className='header__img' src="/Rick.jpg.webp" alt="" />
      <img className='header__title' src="/logorickandmorty.png" alt=""/>
      </div>
      <form onSubmit={handleSubmit} className='header__btn'>
        <input id='idlocation' className='header__input' type="text" placeholder='Enter another number from 1 to 126' onChange={handleChange}/>
        <button className='header__search'>Search</button>
        <FilterList 
        suggestedlist={suggestedlist}
        setSearchInput={setSearchInput}
        />
      </form>
      
      {
          hasError ?
          <ErrorScreen />
          :
          <>
            <Locationinfo location={location}/>
            <div className='card-container'>
              {
                location?.residents.map(url =>
                  <CardResident
                  key={url}
                  url={url}
                  />
                  )
              }
            </div>
        </>
      }
    </div>
  )
}

export default App
