import { Header } from './components/Header';
import { PagesContextProvider } from './contexts/pages-contexts';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

export function App() {
  return (
    <main className='relative flex w-screen flex-col items-center justify-center gap-10 bg-primary-1 text-white'>
      <PagesContextProvider>
        <Header />
        <Home />
        <About />
        <Projects />
      </PagesContextProvider>
    </main>
  );
}
