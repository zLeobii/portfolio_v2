import React, { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { Parallax } from 'react-parallax';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OfferAndSkills from './components/OfferAndSkills';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

import CoolImage from "./assets/important/coolimage.png";
import Mixed from "./assets/bg/MIXED.png";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
      }, 500 );
  }, []);

  return (
    <div>
      {
      loading 

      ?

      <div className='h-[100dvh] w-[100dvw] flex justify-center items-center'>
          <PulseLoader color="#1967B9"/>
      </div>

      :

      <div>
        <div className='md:h-[100dvh] h-[900px] bg-cover bg-no-repeat bg-hero object-contain overflow-hidden'>
          <Navbar />
          <Hero />
        </div>
        
        <div className='flex flex-col items-center justify-center h-auto bg-cover bg-no-repeat bg-blackk object-contain overflow-hidden pt-[80px] xl:pt-[120px] gap-[120px]'>
          <About />
          <OfferAndSkills />
          <img src={CoolImage} alt="coolimage" className='w-[330px] h-[134.3px] md:w-[500px] md:h-[203.5px] lg:w-[950px] lg:h-[386.64px] xl:w-[1162px] xl:h-[472.93px]' />
        </div>

        <Projects />

        <Parallax strength={800} bgImage={Mixed} className='bg-cover'>
          <Process />
        </Parallax>

        <Contact />

        <Footer />

      </div>
      }
    </div>
  )
}

export default App;
