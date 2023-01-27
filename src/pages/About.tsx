import { Header } from '../components/Header';

// interface IPropsAbout {
//   setTitlePage: React.Dispatch<React.SetStateAction<string>>;
// }

export function About() {
  const titlePage = 'About';
  // setTitlePage(titlePage);
  return (
    <section
      id='about'
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
