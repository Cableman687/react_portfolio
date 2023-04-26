import React from 'react';
import selfie from '../../assets/images/self-photo.jpg';

export default function About() {
  return (
    <div>
      <header className='row text-center'>
        <h1>About Me!</h1>
      </header>
      
      <section className='row justify-content-center'>
        <div className='col-8'>
          <p className="primaryText text-center">
            Hi There! I am a Full Stack Developer and C++ enthusiast on a learning journey of nearly three years.
            As a Programmer I am always ready to jump into new challenges and create clean, elegant solutions to complex problems.
              I have completed many projects showcasing my skills across a range of different technologies including C++, JavaScript, HTML, SQL, CSS and many others.
              I believe that my background in Mining, Projects and Finance also allows me to understand some of the largest industries in Australia, and tackle industry-specific problems in ways that other developers may not.
                .
          </p>

          <p className="primaryText  text-center">
          Full-Stack Development | C++ | Mining | Projects | Finance
          </p>

          <div className='text-center'>
            <button type="button">View Projects!</button>
          </div>

          <div className='text-center'>
          <img src={selfie} height="300" className='m-4' alt="picture-of-author"/>
          </div>

        </div>

      </section>
      


      
    </div>
  );
}