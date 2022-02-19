import axios from 'axios'
import React,{useState,useEffect} from 'react'
import ArrContext from './ArrContext'

const ArrState = (props) => {
    const [cat ,setcat]=useState()
    const [dog ,setdog]=useState()

useEffect(() => {
  
    axios.get("https://api.thecatapi.com/v1/images/search").then((res)=>{
        setcat(res)
    })
  
}, [cat])
useEffect(() => {
  
    axios.get("https://dog.ceo/api/breeds/image/random").then((res)=>{
        setdog(res)
    })
  
}, [dog])
    

    
    // https://api.thecatapi.com/v1/images/search
    //https://dog.ceo/api/breeds/image/random

  return (
    <ArrContext.Provider value={{ cat,dog}}>
        {props.children}
    </ArrContext.Provider>
  )
}

export default ArrState