import React from "react"
import './Home.css';
import CircleType from 'circletype'


class Home extends React.Component {

  componentDidMount() {
    new CircleType(document.getElementById('one'))
    new CircleType(document.getElementById('two'))
    new CircleType(document.getElementById('three'))
  }
  render() {
    return (
      <div>
        <div id="container">
        <div className="round-container">
        <h1 className="round" id='one'> WELCOME TO MY WEBSITE -</h1>
      </div>
        <div className="round-container">
        <h1 className="round" id='two'> WELCOME TO MY WEBSITE -</h1>
      </div>
      <div className="round-container">
        <h1 className="round" id='three'> WELCOME TO MY WEBSITE -</h1>
      </div>
        </div>
      </div>
    )
  }
}



export default Home;
