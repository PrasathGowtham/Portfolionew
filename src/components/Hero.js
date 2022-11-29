import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./astronaout.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        <div className='container' ref={container}></div>
      </div>
      <div className='max-w-md mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl'>Hello. I am Gowtham Prasath</h1>
        <p className='tracking-wide leading-relaxed'>
         About a years ago I decided want more from my career - plus I love learning, So I decided to teach
        myself how to code and I started with HTML5 and CSS3 for Better knowladge I moved to Full Stack devolepment
        Course (MERN) in Guvi Geek Institue from June 2022 to Nov 2022 before my Full Stack Course I had complited B.E
        Civil Engineering in year 2018, and  worked as site Engineer in Apexinfralink limited till May 2022.
        </p>
      </div>
    </section>
  );
};

export default Hero;
