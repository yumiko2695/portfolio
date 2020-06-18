import React from "react"
import './Home.css';
import CircleType from 'circletype'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'WELCOME TO MY WEBSITE',
      direction: 1,
      arc: 50,
      classFont: ''
    }
  }

  componentDidMount() {
    new CircleType(document.getElementById('round'))
  }
  render() {
    return (
      <div id="round-container">
        <h1 id="round">WELCOME TO MY WEBSITE</h1>
      </div>
    )
  }
}



export default Home;
