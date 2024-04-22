import React from 'react'
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom'

const Gallery = () => {
    const fetchingResult = useLoaderData()
    const navigate = useNavigation()
  return (
    <div>Gallery
        {navigate.state==="loading"?(<h1>Loading...</h1>):
            (<img src={fetchingResult} alt="doggy" />)}
    </div>
  )
}

export default Gallery