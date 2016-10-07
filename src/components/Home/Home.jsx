import React from 'react'

process.env.BROWSER ? require('./style') : null

class Home extends React.Component {
  render() {
    let { increment, incrementIfOdd, incrementAsync, decrement, decrementAsync, counter } = this.props
    return (
      <div className="home">
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button className="testing" onClick={incrementIfOdd}>Increment if odd</button>
      </div>
    )
  }
}

export default Home
