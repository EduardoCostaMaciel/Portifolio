/* eslint-disable prettier/prettier */
import { useState } from 'react';
import {
  House,
  User,
  Briefcase,
  GithubLogo,
  LinkedinLogo,
} from 'phosphor-react';

export function NavBar() {
  const [isSectionNavActive, setIsSectionNavActive] = useState('#home');

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
          href='#home'
          className='flex focus:outline-none focus:ring-2 focus:rounded-md focus:ring-zinc-500'
          onClick={() => setIsSectionNavActive('#home')}
        // onClick={() => handleClick('#home', 'Home')}

        >
          <House
            size={44}
            className={`${isSectionNavActive === '#home' ? 'text-primary-300' : 'text-primary-200'} hover:p-0.5`}
          />
          {/* Home */}
        </a>
        {/* ABOUT */}
        <a
          href='#about'
          className='flex focus:outline-none focus:ring-2 focus:rounded-md focus:ring-zinc-500'
          onClick={() => setIsSectionNavActive('#about')}
        // onClick={() => handleClick('#about', 'About')}
        >
          <User
            size={44}
            className={`
              ${isSectionNavActive === '#about' ? 'text-primary-300' : 'text-primary-200'} hover:p-0.5`}
          />
          {/* About */}
        </a>
        {/* PROJECTS */}
        <a
          href='#projects'
          className='flex focus:outline-none focus:ring-2 focus:rounded-md focus:ring-zinc-500'
          onClick={() => setIsSectionNavActive('#projects')}
        // onClick={() => handleClick('#projects', 'Projects')}

        >
          <Briefcase
            size={44}
            className={`${isSectionNavActive === '#projects' ? 'text-primary-300' : 'text-primary-200'} hover:p-0.5`}
          />
          {/* Projects */}
        </a>

        {/* SOCIALS MEDIA */}

        {/* GITHUB */}
        <a
          href='https://github.com/EduardoCostaMaciel'
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
          href='https://www.linkedin.com/in/eduardocostamaciel/'
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
