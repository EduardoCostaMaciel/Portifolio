import { usePage } from '../hooks/usePage';
import { SelectPage } from '../types';
import { colors } from '../utils/colors';
import { IconFolder, IconHome, IconUser } from './icons';

export function Nav({
  display = 'hidden',
  position
}: {
  display?: string;
  position?: string;
}) {
  const { page, setPage } = usePage();

  const handleChangePage = (value: SelectPage) => {
    setPage(value);
  };

  return (
    <nav
      className={`z-10 ${display} ${position} gap-y-2 font-light text-gray-300 transition-all delay-700 duration-500 ease-linear sm:flex`}
    >
      {/* HOME */}
      <a
        href='#home'
        className={`
        ${
          page === SelectPage.HOME
            ? 'text-secondary-2 sm:border-b-secondary-2'
            : 'border-b-transparent hover:text-secondary-1'
        }
        -mb-1 flex gap-x-0.5 p-0.5 px-2 font-medium transition-colors duration-200 ease-out focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white sm:border-b-4`}
        onClick={() => handleChangePage(SelectPage.HOME)}
      >
        <IconHome
          size='22px'
          fill={`${
            page === SelectPage.HOME ? colors.secondary[2] : colors.secondary[3]
          }`}
        />
        Home
      </a>

      {/* ABOUT */}
      <a
        href='#about'
        className={`
        ${
          page === SelectPage.ABOUT
            ? 'text-secondary-2 sm:border-b-secondary-2'
            : 'border-b-transparent hover:text-secondary-1'
        }
        -mb-1 flex gap-x-0.5 p-0.5 px-2 font-medium transition-colors duration-200 ease-out focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white sm:border-b-4`}
        onClick={() => handleChangePage(SelectPage.ABOUT)}
      >
        <IconUser
          size='22px'
          fill={`${
            page === SelectPage.ABOUT
              ? colors.secondary[2]
              : colors.secondary[3]
          }`}
        />
        Sobre Me
      </a>

      {/* PROJECTS */}
      <a
        href='#projects'
        className={`
        ${
          page === SelectPage.PROJECTS
            ? 'text-secondary-2 sm:border-b-secondary-2'
            : 'border-b-transparent hover:text-secondary-1'
        }
        -mb-1 flex gap-x-0.5 p-0.5 px-2 font-medium transition-colors duration-200 ease-out focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white sm:border-b-4`}
        onClick={() => handleChangePage(SelectPage.PROJECTS)}
      >
        <IconFolder
          size='22px'
          fill={`${
            page === SelectPage.PROJECTS
              ? colors.secondary[2]
              : colors.secondary[3]
          }`}
        />
        Projetos
      </a>
    </nav>
  );
}
