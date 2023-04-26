import React from 'react';
import resume from "../../assets/documents/William-Cable_Resume.docx"

export default function Resume() {
  return (
    <div className='container'>
      <header className='row text-center'>
        <h1>Resume</h1>
      </header>
      <section className='row text-center'>
        <a href={resume} download>Click here to download my Resume!</a>
      </section>
      <section className='row'>
      <h3>Proficiencies</h3>
          <h5>Front-End:</h5>
          <ul  className="primaryText">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
          </ul>
          <h5>Back-End:</h5>
          <ul className="primaryText">
            <li>Javascript</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React.JS</li>
            <li>Node.js</li>
            <li>MVC</li>
            <li>Handlebars</li>
            <li>Webpack</li>
          </ul>
      </section>
      <section  className='row'>
      <h3>Core Experience</h3>
          <h5>Electrical Project Coordination</h5>
          <p className="primaryText">
          Currently working as a Project Coordinator in the building of a battery facility for the Kwinana region. 
          The project hopes to provide a solution to the infrastructure stresses arising from the growing electrical consumer market and bring Perth closer towards a sustainable energy future.
          </p>
          <h5>Mining</h5>
          <p className="primaryText">
          Created, and engaged with several disciplines within the Mining industry between 2019 and 2021 as a Mining Graduate in Zambia. Including but not limited to Mobile Maintenance, Projects, Logistics, Contracts, Construction. 
          Across these, I was assigned projects ranging from the building of new warehouses, to the introduction of software solutions into otherwise outdated business practices site-wide.
          </p>
      </section>
      <section  className='row'>
      <h3>Professional</h3>
        <h5>Genus Plus Group Ltd. (2021 - Current)</h5>
        <ul className="primaryText">
          <li>Project Coordinator</li>
          <li>Perth, WA</li>
          <li>A stepping-stone role intended to prepare an individual to become a Project Engineer, and eventually a Project Manager.</li>
        </ul>
        <h5>First Quantum Minerals Ltd. (2020-2021)</h5>
        <ul className="primaryText">
          <li>International Graduate Program (18 months)</li>
          <li>Solwezi, Zambia</li>
          <li>FIFO (10/3) at a Copper Mining Operation, working in all areas of the mine-site to determine proficiences, gain exposure to different work-types, and raise general interest in the industry.</li>
        </ul>
        <h5>Vita Group Ltd. (2017-2019)</h5>
        <ul className="primaryText">
          <li>Sales Consultant</li>
          <li>Perth, WA</li>
          <li>A sales role requiring the the consultation of both consumer and business customers daily, to assist the client with their telecommunication needs.</li>
        </ul>
      </section>
 
    </div>
  );
}