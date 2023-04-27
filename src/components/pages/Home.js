import React from 'react';
import avatar from '../../assets/images/avatar.png';

export default function Home() {
  return (
    <div>
      <div className='text-center'>
        <img src={avatar} height="250" className='m-4' alt="picture-of-author"/>
      </div>
      
      <section className='row justify-content-center'>
        <div className='col-7'>
            <p className="primaryText text-center m-1">
            Hi there!
            </p>
          <p className="primaryText text-center">
             My name is Will and welcome to my React Portfolio. This has been built as a nice 
            way to show off some off some of my skills and projects, if you like what you see please do not hesitate to head on over 
            to the contact tab where you can get in touch. Please Enjoy!
          </p>

        </div>

      </section>

    </div>
  );
}