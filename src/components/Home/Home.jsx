import React from 'react'
import './style.scss'

const Home = ({ increment, incrementIfOdd, incrementAsync, decrement, counter }) => (
  <div className="home">
    Clicked: {counter} times
    {'  '}
    <button onClick={increment}>+</button>
    {' '}
    <button onClick={decrement}>-</button>
    {' '}
    <button onClick={incrementIfOdd}>Increment if odd</button>
    {' '}
    <button onClick={() => incrementAsync()}>Increment async</button>
  </div>
)

export default Home
