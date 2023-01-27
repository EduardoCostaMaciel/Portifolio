import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';

export function App() {
  return (
    <main className='relative w-screen flex flex-col items-center justify-center'>
      <NavBar />
      <Home />
      <About />
      <Projects />
    </main>
  );
}
