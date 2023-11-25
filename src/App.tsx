import React from 'react'
import Counter from './components/Counter'
import {  useSelector } from 'react-redux'
import {RootState} from './store'

const App = () => {
  const value=useSelector((state:RootState)=>state.counterReducer.count);
  return (
    <>
    {value}
    <Counter/>
    </>
  )
}

export default App