import React from 'react'
import { useGlobalContext } from '../Context'

const Pagination = () => {
  const {page , nbPages , getNextPage , getpreviousPage} = useGlobalContext()
  return (
    <>
        <div className='pagination'>
            <span className='prevbtn' onClick={() => getpreviousPage()}>Prev</span>
            <span>{page + 1} to {nbPages}</span>
            <span className='nextbtn' onClick={() => getNextPage()}>Next</span>
        </div>
    </>
  )
}

export default Pagination
