import React from 'react'
import {ExperienceGh, ExperienceAs, ExperienceRb, ExperienceNu} from './ExperienceInfo'

export class Experience extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gh: false,
      as: false,
      rb: false,
      nu: false
    }
    this.toggleDiv = this.toggleDiv.bind(this)
  }
  toggleDiv = (event) => {
    console.log(event.target.name)
    if(event.target.name === 'gh') {
      this.setState({...this.state, gh: !this.state.gh})
    } else if(event.target.name === 'as') {
        this.setState({...this.state, as: !this.state.as})
      }
      else if(event.target.name === 'rb') {
        this.setState({...this.state, rb: !this.state.rb})
      } else if (event.target.name === 'nu') {
        this.setState({...this.state, nu: !this.state.nu})
      }

  }

  render() {
    return (
      <div className="experience">
      <h1>Experience</h1>
      <div className="project1">
        <div className="experience-container">
          <div className="title">
          <h3>Grace Hopper Program</h3>
          </div>
          <button className="accordion" name="gh" onClick={this.toggleDiv}>
          <div className="project-header">
          <h4 className="role">Student</h4>
            <h4>January-April 2020</h4>
          </div>
          </button>
        </div>
        {this.state.gh ? <ExperienceGh/> : <div></div>}
      </div>
      <div className="project1">
        <div className="experience-container">
          <div className="title">
            <h3>Adult Swim Music Series</h3>
          </div>
          <button className="accordion" name="as" onClick={this.toggleDiv}>
            <div className="project-header">
              <h4 className="role">Program Coordinator</h4>
              <h4>January 2017-Present</h4>
            </div>
          </button>
        </div>
        {this.state.as ? <ExperienceAs/> : <div></div>}
        </div>
        <div className="project1">
        <div className="experience-container">
          <div className="title">
            <h3>Yadastar Inc. / Red Bull Music Festivals</h3>
          </div>
          <button className="accordion" name="rb" onClick={this.toggleDiv}>
            <div className="project-header">
              <h4 className="role">Event Coordinator</h4>
              <h4>August 2017-November 2019</h4>
            </div>
          </button>
        </div>
        {this.state.rb ? <ExperienceRb/> : <div></div>}
        </div>
        <div className="project1">
        <div className="experience-container">
          <div className="title">
            <h3>Northwestern University</h3>
          </div>
          <button className="accordion" name="nu" onClick={this.toggleDiv}>
            <div className="project-header">
              <h4 className="role">Undergraduate</h4>
              <h4>September 2013 - June 2017</h4>
            </div>
          </button>
        </div>
        {this.state.nu ? <ExperienceNu/> : <div></div>}
        </div>
    </div>
    )}



}

export default Experience
