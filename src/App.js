import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './component/Header/Header';
import Hero from './component/UI/Hero';
import Counter from './component/UI/Counter';
import Services from './component/UI/Services';
import About from './component/UI/About';
import Team from './component/UI/Team';
import Blog from './component/UI/Blog';
import Testimonial from './component/UI/Testimonial';
import Newsletter from './component/UI/Newsletter';
import Footer from './component/Footer/Footer';
function App() {

  const [theme,setTheme]= useState('')

  const toggleTheme = ()=>{
    theme === ''? setTheme('light-theme'): setTheme('')
  }
  useEffect(()=>{
    document.body.className = theme
  },[theme]);

  return (
    <>
    <Header theme={theme} toggleTheme={toggleTheme}/>
    <Hero theme={theme}/>
    <Counter />
    <Services />
    <About />
    <Team />
    <Blog />
    <Testimonial />
    <Newsletter />
    <Footer />
    </>
  ); 
}

export default App;
