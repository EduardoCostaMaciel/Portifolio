import { Header } from '../components/Header';

// interface IPropsProjects {
//   setTitlePage: React.Dispatch<React.SetStateAction<string>>;
// }

export function Projects() {
  const titlePage = 'Projects';
  // setTitlePage(titlePage);
  return (
    <section
      id='projects'
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
