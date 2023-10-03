import { colors } from '../utils/colors';
import { IconGitHub, IconLinkedin } from './icons';

export function SocialNetworks({ display = 'sr-only' }: { display?: string }) {
  return (
    <section
      className={`${display} w-ful items-center gap-x-4 sm:not-sr-only sm:flex`}
    >
      {/* GITHUB */}
      <a
        href='https://github.com/EduardoCostaMaciel'
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-50 focus:rounded-full focus:p-0.5 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white'
      >
        <IconGitHub
          size='30px'
          fill={colors.secondary[3]}
        />
      </a>

      {/* LINKDIN */}
      <a
        href='https://www.linkedin.com/in/eduardocostamaciel/'
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-50 focus:rounded-full focus:p-0.5 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white'
      >
        <IconLinkedin
          size='30px'
          fill={colors.secondary[3]}
        />
      </a>
    </section>
  );
}
