import Hero from './components/Hero/Hero';
import ProjectsGrid from './components/ProjectsGrid/ProjectsGrid';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <ProjectsGrid />
      <About />
    </div>
  );
}

export default App;

