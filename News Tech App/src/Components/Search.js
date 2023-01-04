import React from 'react'
import { useGlobalContext } from '../Context'



const Search = () => {
  const {Search_Post , query} = useGlobalContext()
  return (
    <>
        <input type='text' className='input' placeholder='Search News...'  value = {query} onChange={(e) => Search_Post(e.target.value) }></input>
    </>
  )
}

export default Search
