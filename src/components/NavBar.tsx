/* eslint-disable prettier/prettier */
import { useState } from 'react';
import {
  House,
  User,
  Briefcase,
  GithubLogo,
  LinkedinLogo,
} from 'phosphor-react';

import * as Routes from '../utils/routes';

export function NavBar() {
  const [isSectionNavActive, setIsSectionNavActive] = useState(Routes.HOME);

  return (
    <nav
      className='
        w-full fixed bottom-0
        flex items-center justify-center 
        bg-primary-200
        shadow-md shadow-primary-100
        transition-all ease-linear
        md:flex-col
        md:w-auto md:h-full md:top-0 md:right-0
        z-10
      '
    >
      {/* PAGES */}
      <section
        id='pages'
        className='
        py-2 px-2
        flex flex-grow justify-around
        bg-opaced-100
        md:px-2 md:py-8 md:flex-col md:justify-start md:gap-y-4 md:gap-x-0
        '
      >
        {/* HOME */}
        <a
          href={Routes.HOME}
          className='flex focus:outline-none focus:ring-2 focus:rounded-md focus:ring-zinc-500'
          onClick={() => setIsSectionNavActive('#home')}
        >
          <House
            size={44}
            className={`
              ${isSectionNavActive === Routes.HOME
                ? 'text-primary-300 rounded-lg border border-primary-200 shadow shadow-primary-300'
                : 'text-primary-200'
              }
              hover:p-0.5
            `}
          />
          {/* Home */}
        </a>
        {/* ABOUT */}
        <a
          href={Routes.ABOUT}
          className='flex focus:outline-none focus:ring-2 focus:rounded-md focus:ring-zinc-500'
          onClick={() => setIsSectionNavActive('#about')}
        >
          <User
            size={44}
            className={`
              ${isSectionNavActive === Routes.ABOUT
                ? 'text-primary-300 rounded-lg border border-primary-200 shadow shadow-primary-300'
                : 'text-primary-200'
              }
              hover:p-0.5
            `}
          />
          {/* About */}
        </a>
        {/* PROJECTS */}
        <a
          href={Routes.PROJECTS}
          className='flex focus:outline-none focus:ring-2 focus:rounded-md focus:ring-zinc-500'
          onClick={() => setIsSectionNavActive('#projects')}
        >
          <Briefcase
            size={44}
            className={`
              ${isSectionNavActive === Routes.PROJECTS
                ? 'text-primary-300 rounded-lg border border-primary-200 shadow shadow-primary-300'
                : 'text-primary-200'
              }
              hover:p-0.5
            `}
          />
          {/* Projects */}
        </a>

        {/* SOCIALS MEDIA */}

        {/* GITHUB */}
        <a
          href={Routes.USER_GITHUB_REPO}
          target='_blank'
          rel='noreferrer'
          className='
            focus:outline-none focus:ring-2 focus:rounded-md focus:ring-zinc-500
            md:mt-48
          '
        >
          <GithubLogo size={44} className='text-zinc-600 hover:p-0.5' />
        </a>
        {/* LINKDIN */}
        <a
          href={Routes.USER_LINKDIN_PAGE}
          target='_blank'
          rel='noreferrer'
          className='focus:outline-none focus:ring-2 focus:rounded-md focus:ring-zinc-500'
        >
          <LinkedinLogo size={44} className='text-zinc-600 hover:p-0.5' />
        </a>
      </section>
    </nav >
  );
}
