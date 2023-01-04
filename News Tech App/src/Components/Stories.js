import React from 'react'
import { useGlobalContext } from '../Context'

const Stories = () => {
  const {hits , isLoading , removePost} = useGlobalContext()
  if(isLoading){
    return (
      <>
        <h1>Loading....</h1>
      </>
    )
  }
  return (
    <> 
      {
        hits.map((cur) =>{
          return <div className='stories' key={cur.objectID}>
            <h2>{cur.title}</h2>
            <p>By <span>{cur.author}</span> | <span>{cur.num_comments}</span> comments </p>
            <div className='ReadmoreContent'>
                <span className='Readmore'>
                <a href={cur.url} target='_blank'>Readmore</a>
                
                </span>
                <span className='remove'>
                <a href='#' onClick={() => removePost(cur.objectID)}>Remove</a>
                </span>
            </div>
        </div>
        })
      }
    </>
  )
}

export default Stories
