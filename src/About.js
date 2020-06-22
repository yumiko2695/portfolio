import React from "react"
import "./About.css"

function About(props) {
  return (
    <div className="aboutcontainer">
      <div className="left">
        <h1>About</h1>
        <div className="text">
        <h4>Yumiko M. NYC.</h4>
        <h4>Software Engineer. Grace Hopper Alum 2020.</h4>
        <h4>Previously events at Yadastar/RBMA/Red Bull Music Festivals. </h4>
        <h4>Nortwestern Grad.</h4>
        <h4>In my spare time, I'm probably checking Bandcamp emails, sharing music with friends, working on Expressionless Objects, eating pizza or enjoying memes.</h4>
        <h4>And yes, thats me.</h4>
        </div>
      </div>
      <div className="right">
        <img type="image/jpeg" src="https://storage.googleapis.com/yumi-s-house-images/10371959_661057197349318_6427329680732058134_n.jpg" className="aboutpic"/>
      </div>
    </div>
  )
}

export default About;
