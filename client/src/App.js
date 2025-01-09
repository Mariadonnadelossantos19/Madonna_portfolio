import React,{useState,createContext} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Project from './components/Projects/Project';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Testemonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobileView from './components/Sidebar/NavbarMobileView';
import Certificate from './components/Certificate/Certificate';
export const ThemeContext =createContext(null);
const App = ()=>{
const [theme, setTheme] = useState("light");
const changeTheme =()=>{
  setTheme((prev) => (prev=== "light" ? "dark": "light"));
}
  return(
    <ThemeContext.Provider value={{theme,changeTheme}}>

    <div id={theme}>
      <NavbarMobileView/>
      <Sidebar changeTheme={changeTheme} theme={theme}/> 
      <About/>
      <WorkExperience/>
      <TechStack/>
      <Education/> 
      <Project/>
      <Certificate/>
      <Testemonial/>
      <Contact/>
     
    </div>

  <ScrollToTop smooth={true}
  top='20'
  color='white'
  height='20'
  width='20'
  style={{ borderRadius:"90px",backgroundColor:"#FF8042"}}/>
  
    </ThemeContext.Provider>
  );
}

export default App;