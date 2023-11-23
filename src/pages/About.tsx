import { useState } from 'react';

import me from '../assets/images/me.png';

export function About() {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <>
      <hr
        id='about'
        className='w-11/1'
      />
      <section className='flex min-h-screen w-full items-center justify-center text-zinc-300 md:h-60'>
        <div className='flex w-11/12 flex-col items-center justify-center gap-4 border border-zinc-900 bg-black bg-opacity-10 p-4 shadow-md backdrop-blur-sm transition-all duration-700 ease-out md:px-16 lg:flex-row lg:py-0 lg:px-10'>
          <img
            src={me}
            alt='Foto de Eduardo Costa'
            className='h-72 lg:h-[30rem]'
          />
          <div className='flex flex-col items-center justify-center text-center text-lg lg:h-[26rem] lg:w-[36rem]'>
            <p>
              Meu nome é Eduardo Costa, e sou um entusiasta de tecnologia com
              uma paixão por desenvolvimento de software. Conquistei meu diploma
              em Desenvolvimento de Software pela
              <a
                className='font-bold text-emerald-700 hover:text-white'
                href='https://www.betrybe.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                Trybe
              </a>{' '}
              | Escola de Programação Online, onde adquiri habilidades sólidas e
              conhecimento em programação web.
            </p>
            <p
              className={
                showFullText ? 'h-auto' : 'h-0 overflow-hidden md:h-6 lg:h-20'
              }
            >
              Estou no início da minha carreira como desenvolvedor e estou
              animado para explorar novas oportunidades e desafios. Comprometido
              em aprender continuamente e aprimorar minhas habilidades para
              contribuir de forma significativa em projetos futuros e ansioso
              para fazer parte de projetos empolgantes e ajudar a transformar
              ideias em realidade por meio da programação.
            </p>

            <button
              onClick={() => setShowFullText(!showFullText)}
              className='mt-2 cursor-pointer px-2 font-medium text-secondary-2 hover:text-white'
            >
              {!showFullText ? '... mais' : 'menos ...'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
