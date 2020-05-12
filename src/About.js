import React from "react"
import "./About.css"

function About(props) {
  return (
    <div className="aboutcontainer">
      <div className="aboutcontainer-sub-left">
        <h1>About</h1>
        <h4>I am Yumiko Mannarelli. I live in NYC.</h4>
        <h4>I am a born again software engineer, a recent graduate of the Grace Hopper Program.</h4>
        <h4>I was previously working at Yadastar/RBMA as an event coordinator.</h4>
        <h4>Before that, I was studying Communications, Legal Studies and Integrated Marketing at Northwestern University in Evanston, IL.</h4>
        <h4>I love eating pizza and learning about old and new music.</h4>
      </div>
      <div className="aboutcontainersub-right">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="aboutphoto">
          <img src="https://storage.cloud.google.com/yumi-s-house-images/Screen%20Shot%202020-03-20%20at%204.10.48%20PM.png?authuser=1" className="aboutpic"/>
          </div>
      </div>
    </div>
  )
}

export default About;
