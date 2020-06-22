import React from "react"
import './Projects.css';
import './Accordion'
import {ProjectInfo1, ProjectInfo2} from './ProjectsInfo'
import Experience from './Experience'

class Projects extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      project1: false,
      project2: false,
    }
    this.toggleDiv = this.toggleDiv.bind(this)
  }

  toggleDiv = (event) => {
    if(event.target.name === 'project1') {
      this.setState({...this.state, project1: !this.state.project1})
    } else {
      this.setState({...this.state, project2: !this.state.project2})
    }
  }

  render (){
    return (
      <div className="container">
      <div className="projects">
      <h1>Projects</h1>
      <div className="project1">
        <h2>AltCart</h2>
        <div className="project-header">
        <h4 className="role">Fullstack Developer</h4>
          <h4>April-May 2020</h4>
        </div>
        <div className="project-body">
          <div className="project-description">
          <p>AltCart is a Chrome Extension that provides shopping alternatives to items added to your Amazon and Walmart carts. The extension also provides corporate social responsibility + sustainability ratings and recent articles for thousands of other e-commerce sites.
          </p>
          </div>
          <div className="dropdown">
            <button className="accordion" name="project1" onClick={this.toggleDiv}>More Info...</button>
            {this.state.project1 ? <ProjectInfo1/> : <div></div>}
          </div>
          <p className="techstack">Chrome Extension API | Node.js | React | Redux | News API | Cheerio | Express | SQL
          </p>
        </div>
        <div className="project-footer">
          <div className="img-container">
            <a href="https://github.com/Xcodist/GH2001-capstone" target="_blank">
            <img type="image/svg+xml" src="https://storage.cloud.google.com/yumi-s-house-images/25231.svg?authuser=1" width="30px" height="30px"/>
            </a>
          </div>
          <div className="img-container">
            <a href=""  target="_blank">
            <img type="image/png" src="https://storage.cloud.google.com/yumi-s-house-images/Screen-Shot-2015-06-15-at-19.22.42.png?authuser=1" width="30px" height="30px"/>
            </a>
          </div>
        </div>
      </div>
      <div className="project2">
        <h2>Tamagotchi Store</h2>
        <div className="project-header">
        <h4 className="role">Fullstack Developer</h4>
          <h4>March 2020</h4>
        </div>
        <div className="project-body">
          <div className="project-description">
          <p>Tamagotchi Store is an e-commerce website built in less than a week by a team of four developers as a project as part of the  Grace Hopper curriculum.
          </p>
          </div>
          <div className="dropdown">
            <button className="accordion" name="project2" onClick={this.toggleDiv}>More Info..</button>
            {this.state.project2 ? <ProjectInfo2 /> : <div></div>}
          </div>
            <p>Node.js | React | Redux | Express | Sequelize | SQL</p>
          </div>
          <div className="project-footer">
          <div className="img-container">
            <a href="https://github.com/harry-potter-grace-shopper/Grace-Shopper" target="_blank">
            <img type="image/svg+xml" src="https://storage.cloud.google.com/yumi-s-house-images/25231.svg?authuser=1" width="30px" height="30px"/>
            </a>
          </div>
          <div className="website">
            <a href="https://tamagotchi-store.herokuapp.com/" target="_blank">
            <p>Store</p>
            </a>
          </div>
        </div>
        <div>
          <h1>Skills</h1>
          <div className="skills">
            <h4>Proficient:</h4>
            <p>JavaScript, Node.js, Express, Sequelize, PostgreSQL, React, React-Redux, Git, Heroku, Github, HTML, CSS</p>
          </div>
          <div className="skills">
            <h4>Knowledgeable:</h4>
            <p>D3, JQuery,  News API, Chrome Extensions</p>
          </div>
          <div className="skills">
            <h4>Familiar:</h4>
            <p>Cheerio, Puppeteer, JQuery, Mocha, Chai, Plaid, Stripe</p>
          </div>
        </div>
      </div>
      {<Experience />}
      </div>
    </div>
    )}
}


export default Projects;
