import React from 'react'
import ArrContext from './ArrContext'

const ArrState = (props) => {
    let arr = [1,2,3,4,5]
    //https://api.thecatapi.com/v1/images/search
    //https://dog.ceo/api/breeds/image/random

  return (
    <ArrContext.Provider value={{arr}}>
        {props.children}
    </ArrContext.Provider>
  )
}

export default ArrState