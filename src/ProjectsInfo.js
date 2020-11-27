import React from 'react';

export function ProjectInfo0 (props)  {
  return (
    <div className="dropdown-content">
            <ul>
            <li>Scoped the project from idea to launch. Assessed internal and external stakeholder needs working directly with the founder, artists, and ops.
          </li>
          <li>Built an express server including routes for additional security and allowing for varying permissions depending on different user classes.
          </li>
          <li>
          Designed and implemented UX flows, including drag and drop functionality that automatically updates the schedule.
          </li>
          <li>Led a sprint on a tight schedule. Sourced, evaluated, and implemented new patterns and database options in accordance to project needs.
          </li>
          </ul>
            </div>
  )
}


export function ProjectInfo1 (props)  {
  return (
    <div className="dropdown-content">
            <ul>
            <li>Incorporated News API to display specific articles in the browser relating to the specific company.
          </li>
          <li>Built scripts to monitor cart activity and provide alternative products through web scraping in the popup if the e-commerce site has a low rating.
          </li>
          <li>
          Implemented a subsidiaries association table and across the stack, giving user access to the parent companies’ ratings as well as information on it’s other subsidiaries, which increased our extensions ability to provide data for over 50 more e-commerce sites.
          </li>
          <li>Deployed the backend of our app to Heroku.
          </li>
          </ul>
            </div>
  )
}

export function ProjectInfo2 (props) {
  return (
    <div className="dropdown-content">
            <ul>
            <li>
            Implemented the categories feature which allowed users to view all products based on various categories.
            </li>
            <li>Constructed Express routes with security middleware for User, Admin, and Guest shopping with persistent cart access.</li>
            <li>Deployed website to Heroku</li>
            </ul>
            </div>
  )
}

export default {ProjectInfo0, ProjectInfo1, ProjectInfo2}
