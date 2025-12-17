import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Header from './components/Header'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
const App = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true,
    });

    return () => {
      if (scroll && typeof scroll.destroy === 'function') scroll.destroy();
    };
  }, []);

  return (
    <>
      <div className="" id="main">
        <Header />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </div>
    </>
  );
};

export default App
