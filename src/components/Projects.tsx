import { Header } from './Header';

export function Projects() {
  const titlePage = 'Projects';
  return (
    <section className='container sm:w-3/4 md:w-5/6 transition-all ease-out duration-700 h-screen bg-primary-100 text-center text-slate-400'>
      <Header text={titlePage} />
    </section>
  );
}
