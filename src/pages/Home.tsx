import { Experience } from '../components/Experience';
import { Header } from '../components/Header';

export function Home() {
  const titlePage = 'Home';
  return (
    <section
      id='home'
      className='
        w-full
        min-h-screen
        flex flex-col items-center
        bg-primary-200
        text-zinc-300
        transition-all ease-out duration-700
      '
    >
      <Header text={titlePage} />
      <header className='text-center mt-6'>
        <h4>Hello World</h4>
        <h1 className='text-xl'>Eu sou o Eduardo Costa</h1>
        <h4 className='text-primary-300'>Desenvolvedor Full Stack</h4>
      </header>
      <Experience />
    </section>
  );
}
