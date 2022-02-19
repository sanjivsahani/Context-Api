import React, { useContext } from 'react'
import ArrContext from '../context/ArrContext'


const Home = () => {
    const a = useContext(ArrContext)
    console.log(a)
  return (
    <div><h3>hi am a home componet</h3></div>
  )
}

export default Home