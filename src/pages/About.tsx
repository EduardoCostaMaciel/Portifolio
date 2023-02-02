import { Header } from '../components/Header';
import me from '../assets/images/me.png';

export function About() {
  const titlePage = 'About';
  return (
    <section
      id='about'
      className='
        w-full
        min-h-screen
        flex flex-col items-center
        bg-primary-200
        text-zinc-400
        transition-all ease-out duration-700
      '
    >
      <Header text={titlePage} />
      <article className='w-11/12 my-8 flex flex-col flex-grow items-center justify-center gap-10 md:flex-row '>
        <div className='bg-opaced-100 -rotate-2 border border-primary-200 rounded-3xl shadow shadow-primary-100'>
          <img
            src={me}
            alt='xxxxxxx'
            className='h-72 bg-primary-200 rotate-8 transition-all ease-linear duration-300 rounded-3xl shadow shadow-primary-100 sm:h-80 md:hover:rotate-0'
          />
        </div>
        <div className='p-2 text-center md:w-35vw'>
          <p>
            Eu me chamo Eduardo Costa, tenho 32 anos, meus hobbies favoritos são
            assistir séries e games, sou muito grato pelo dia de hoje pois ele
            moldará o meu amanhã.
          </p>
          <br />
          <p>
            Me formei em desenvolvimento de software na
            <a
              className='text-trybeTextColor-100 font-bold'
              href='https://www.betrybe.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              Trybe
            </a>{' '}
            | Escola de Programação Online, busco por oportunidades de iniciar
            minha carreira como desenvolvedor.
          </p>
        </div>
      </article>
    </section>
  );
}
