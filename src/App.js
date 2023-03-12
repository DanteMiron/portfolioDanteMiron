import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import About from './components/About';
import Contact from './components/Contact';
import MyWork from './components/MyWork';
import Skills from './components/Skills';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <About  title="Acerca de mi" id="about" />
      <Skills title="Skills" id="skills" />
      <MyWork title="Proyectos" id="work" />
      <Contact title="Contacto" id="contact" />
    </div>
  );
}


export default App;
