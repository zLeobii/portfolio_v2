import React, { useEffect, useState } from 'react';
import Test from "./components/Test";
import { HashLoader } from 'react-spinners';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OfferAndSkills from './components/OfferAndSkills';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
          <HashLoader color="#1967B9"/>
      </div>

      :

      <div>
        <div className='h-[100dvh] bg-cover bg-no-repeat bg-hero object-contain'>
          <Navbar />
          <Hero />
        </div>
        
        <div className='h-[100dvh] bg-cover bg-no-repeat bg-black object-contain'>
          <About />
          <OfferAndSkills />
        </div>

        <Projects />

        <div>
          <Process />
        </div>

        <Contact />

        <Footer />

      </div>
      }
    </div>
  )
}

export default App;
