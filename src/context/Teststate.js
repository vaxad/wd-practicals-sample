import React, { useState } from 'react'
import testContext from './context'
export default function TestState(props) {
  const [data, setData] = useState([]);
  return(
    <testContext.Provider value={{data, setData}}>
      {props.children}
    </testContext.Provider>
  )
}
