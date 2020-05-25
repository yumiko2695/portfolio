import React from 'react'

export function ExperienceGh (props) {
  return (
    // <div className="project-body">
    // <div className="project-description">
    // <p>Software Engineering Immersive Program teaching Javascript, the NERD stack, and CS fundamentals.
    // </p>
    // </div>
    // </div>
    <div className="dropdown-content">
            <ul>
            <li>Software Engineering Immersive Program teaching Javascript, the NERD stack, and CS fundamentals.
          </li>
          </ul>
            </div>
  )
}

export function ExperienceAs (props) {
  return (
    <div className="dropdown-content">
        <ul>
        <li>Responsible for helping deliver 100+ tracks over the past three years to the Adult Swim Singles Series which digitally premieres a new track every week of the year.
      </li>
      <li>
      Served as a project manager on a team of 5 to create 15-track compilations project for the Adult Swim Music Program. Previous compilations including Luxe (2017), Fever Dreams (2018), Metal Swim 2 (2019) and an upcoming release (2020).
      </li>
      <li>
      Manage $100K + artist payment budgets, liaison with both artists and internal legal teams to ensure compliance for each side, track scheduling, press roll out and mastering for all responsible premieres.
      </li>
      </ul>
        </div>
  )
}

export function ExperienceRb (props) {
  return (
    <div className="dropdown-content">
        <ul>
        <li>Researched and assisted in booking talent to develop concepts for over 80 unique shows for Red Bull Music Academy Festivals in four major metropolitan cities.
      </li>
      <li>Coordinated with over 20 artist teams, internal Red Bull teams, 3 large production company and graphic designers and ad campaign project managers to confirm approvals and gather information for festival announces.
      </li>
      <li>
      Created and moderated over 20 Facebook events for each festival and worked with software developers to create accurate and on schedule festival sites with ticketing platforms. This was accomplished by managing relationships with creative services team to ensure all project assets are delivered on time.
      </li>
      </ul>
        </div>
  )
}

export function ExperienceNu (props) {
  return (
    <div className="dropdown-content">
        <ul>
        <li>Bachelor of Arts in Communication Studies -- School of Communication
      </li>
      <li>Legal Studies Minor -- Weinberg College
      </li>
      <li>Integrated Marketing Certificate -- Medill
      </li>
      </ul>
        </div>
  )
}

export default {ExperienceGh, ExperienceAs, ExperienceRb, ExperienceNu}
