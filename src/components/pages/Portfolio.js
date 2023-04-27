import React from 'react';
import '../../styles/style.css';

// Images
import cyber from '../../assets/images/cyber_fridge.png';
import blog from '../../assets/images/tech_blog.png';
import tracker from '../../assets/images/employee_tracker.jpg';
import cocktail from '../../assets/images/rick_and_morty.png';
import notes from '../../assets/images/note_taker.jpg';
import readme from '../../assets/images/readme_generator.jpg';


export default function Portfolio() {
  return (
    <div>
      <header className='row text-center'>
        <h1>Portfolio</h1>
      </header>
      
      {/* Group Projects Section*/}
      <header className='text-center'>
        <h3>Group Projects</h3>
      </header>
      <section className='row justify-content-md-center'>
      <div className="card col-2 p-0 m-2" style={{width: "30rem"}}>
        <img src={cyber} className="card-img-top" height="300" width="300" objectFit="cover" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Cyber Fridge</h5>
          <p className="card-text">View, add, delete, and update ingredient quantities and recipes in a virtual fridge environment.</p>
          <div className='text-center'>
            <a href="https://github.com/Cableman687/cyber_fridge" className="btn btn-warning me-2">Go To Repository</a>
            <a href="https://stormy-cliffs-46291.herokuapp.com/login" className="btn btn-warning">Go To Application</a>
          </div>
        </div>
      </div>
      <div className="card col-2 p-0 m-2" style={{width: "30rem"}}>
        <img src={cocktail} className="card-img-top" height="300" width="300" objectFit="cover" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Rick & Morty Cocktail Generator</h5>
          <p className="card-text">Generate your very own Rick & Morty character based on your choice of drink!</p>
          <div className='text-center'>
            <a href="https://github.com/Cableman687/rm-cocktail-generator" className="btn btn-warning me-2">Go To Repository</a>
            <a href="https://cableman687.github.io/rm-cocktail-generator/" className="btn btn-warning">Go To Application</a>
          </div>
        </div>
      </div>
      </section>

      {/* Solo Projects Section */}
      <header className='text-center'>
        <h3>Solo Projects</h3>
      </header>
      <section className='row justify-content-md-center'>
      <div className="card col-2 p-0 m-2" style={{width: "30rem"}}>
        <img src={blog} className="card-img-top" height="300" width="300" objectFit="cover" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Tech Blog</h5>
          <p className="card-text">Post, delete, and update blogs to be viewed and commented-on by yourself and others.</p>
          <div className='text-center'>
            <a href="https://github.com/Cableman687/tech_blog" className="btn btn-warning me-2">Go To Repository</a>
            <a href="https://warm-earth-74370.herokuapp.com/dashboard" className="btn btn-warning">Go To Application</a>
          </div>
        </div>
      </div>
      <div className="card col-2 p-0 m-2" style={{width: "30rem"}}>
        <img src={tracker} className="card-img-top" height="300" width="300" objectFit="cover" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">SQL Employee Tracker</h5>
          <p className="card-text">Track employees, roles and departments within an organisation, as well as create new entries and update existing ones.</p>
          <div className='text-center'>
            <a href="https://github.com/Cableman687/employee-tracker" className="btn btn-warning me-2">Go To Repository</a>
            <a href="https://drive.google.com/file/d/1SGTvvDyiQQDrm4PGTMDDGOWALJ0a48va/view" className="btn btn-warning">Demonstration Video</a>
          </div>
        </div>
      </div>
      <div className="card col-2 p-0 m-2" style={{width: "30rem"}}>
        <img src={notes} className="card-img-top" height="300" width="300" objectFit="cover" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Server-Side Note Taker</h5>
          <p className="card-text">Create and manage notes in a server environment to keep track of ideas, lists and other text bodies.</p>
          <div className='text-center'>
            <a href="https://github.com/Cableman687/note-taker" className="btn btn-warning me-2">Go To Repository</a>
            <a href="https://safe-journey-06458.herokuapp.com" className="btn btn-warning">Go To Application</a>
          </div>
        </div>
      </div>
      <div className="card col-2 p-0 m-2" style={{width: "30rem"}}>
        <img src={readme} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">README Generator</h5>
          <p className="card-text">Generate your own Github repository README using this simple Node.js tool!</p>
          <div className='text-center'>
            <a href="https://github.com/Cableman687/readme-generator" className="btn btn-warning me-2">Go To Repository</a>
            <a href="https://drive.google.com/file/d/1zV8G_o3xJe8JoweFmvJBjPyduPpu2pgE/view" className="btn btn-warning">Demonstration Video</a>
          </div>
        </div>
      </div>
        
      </section>


    </div>
  );
}