import { About } from './components/About';
import { Home } from './components/Home';
import { Projects } from './components/Projects';

export function App() {
  return (
    <main className='w-screen bg-opaced-100'>
      <Home />
      <About />
      <Projects />
    </main>
  );
}
