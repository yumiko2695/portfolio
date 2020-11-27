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
        <a href="https://pfw.guide/" target="_blank">~~~ TAKE ACTION TO DISMANTLE SYSTEMIC RACISM, DEFUND THE POLICE &amp; BE A BETTER ALLY by Patia's Fantasy World~~~</a>
      </div>
      </div>
    )
  }
}



export default Home;
