import React from "react"
import './Personal.css'

function Personal(props) {
  return (
      <div className="container-personal">
        <div className="box">
          <h2>Expressionless Objects</h2>
          <div className="middle">
            <div className="left">
              <h4>Contributing Editor</h4>
              <p>My good friend Ben asked if I could contribute a mix for a monthly bulletin he started with his friend Dylan. I thought it was really cool and I ended up getting involved. It's been fun and  exciting -- kind of new territory for me. I help out with the mixes, add my few cents on layout + design, and just give my unsolicited opinion on other things.</p>
              <br></br>
              <a href="http://expressionless.online">~~~ Expressionless.online ~~~</a>
            </div>
          <div className="right">
            <img className="expressionless-img" src="https://storage.cloud.google.com/yumi-s-house-images/0019196702_10.jpg?authuser=1" width="300px"></img>
          </div>
          </div>
        </div>
        <div className="box2">
          <h2>In Your Dirty Ears</h2>
          <p>In Your Dirty Ears started as my friend Amelia's weekly newsletter sharing new releases and old finds that she was listening to at the moment. Amelia, myself and our friend Sara have a group chat dedicated to talking about and sharing all the new releases we came across in our inboxes' neverending stream of Bandcamp emails. It only felt right that we join Amelia and contribute to the weekly newsletter in rotation.</p>
          <a href="https://tinyletter.com/InYourDirtyEars">~~~ Sign Up Here ~~~</a>
        </div>
        <div className="box">
          <h2>Mixes</h2>
          <div className="mix-container">
          <iframe width="60%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/810863482&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
          </div>
          <div className="mix-container">
          <iframe width="60%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/799236511&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
          </div>
        </div>
        <div className="box">
          <h2>Photos</h2>
        </div>
      </div>
  )
}

export default Personal;
