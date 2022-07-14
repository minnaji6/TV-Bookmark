import React from 'react'
import { useSelector } from 'react-redux'
import { getAllShows } from '../reducers/showSlice'

const ShowListing= () => {
  const shows = useSelector(getAllShows);
  
  console.log(shows)

  return (
    <div>ShowsListing</div>
  )
}

export default ShowListing