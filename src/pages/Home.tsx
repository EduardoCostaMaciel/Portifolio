import { Header } from '../components/Header';

export function Home() {
  const titlePage = 'Home';
  return (
    <section
      id='home'
      className='
        w-full
        h-screen
        flex flex-col items-center
        bg-primary-200
        text-zinc-400
        transition-all ease-out duration-700
      '
    >
      <Header text={titlePage} />
      Em breve
    </section>
  );
}
