

import './App.css';
import About from './component/about/About.js';
import Explanations from './component/explanations/Explanations';
import Heder from './component/heder/Heder';
import Home from './component/home/Home.js';
import Skills from './component/skills/Skills';
import Works from './component/works/Works';


function App() {
  return (
    
    <>

    <div className='app'>
      

      <Home/>
      <About />
      <Skills/>
      <Works/>
      <Explanations/>
      <Heder/>

      
    </div>

    </>
  );
}

export default App;
