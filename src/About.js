import React from "react"
import "./About.css"

function About(props) {
  return (
    <div className="aboutcontainer">
      <div className="left">
        <h1>About</h1>
        <div className="text">
        <h4>I am Yumiko Mannarelli. I live in NYC.</h4>
        <h4>I am a software engineer, a recent graduate of the Grace Hopper Program.</h4>
        <h4>Prior, I was working at Yadastar/RBMA as an event coordinator.</h4>
        <h4>And before that, I was studying Communications, Legal Studies and Integrated Marketing at Northwestern University in Evanston, IL.</h4>
        <h4>I love eating pizza and learning about old and new music.</h4>
        <h4>And yes, thats me.</h4>
        </div>

      </div>
      <div className="right">
        <br></br>
        <br></br>
        <img src="https://storage.cloud.google.com/yumi-s-house-images/10371959_661057197349318_6427329680732058134_n.jpg?authuser=1" className="aboutpic"/>
      </div>
    </div>
  )
}

export default About;
