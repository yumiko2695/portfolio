import React from "react"
import './Home.css';
import CircleType from 'circletype'


class Home extends React.Component {

  componentDidMount() {
    new CircleType(document.getElementById('round'))
  }
  render() {
    return (
      <div>
      <div id="round-container">
        <h1 id="round"> WELCOME TO MY WEBSITE -</h1>
      </div>
      <div id="take-action">
        <a href="https://docs.google.com/presentation/d/1ZXL_OdDNowYzMDVV0a5gAT3OZJgQkg4JzHC5jkPOWNM/edit#slide=id.p" target="_blank">~~~ TAKE ACTION TO DISMANTLE SYSTEMIC RACISM, DEFUND + ABOLISH THE POLICE &amp; BE A BETTER ALLY ~~~</a>
      </div>
      </div>
    )
  }
}



export default Home;
