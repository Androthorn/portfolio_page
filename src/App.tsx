import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle/LanguageToggle';
import Hero from './components/Hero/Hero';
import ProjectsGrid from './components/ProjectsGrid/ProjectsGrid';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <LanguageToggle />
        <Hero />
        <ProjectsGrid />
        <About />
      </div>
    </LanguageProvider>
  );
}

export default App;
