import { IconLink } from '../components/icons';
import { colors } from '../utils/colors';
import { dataProjects } from '../utils/dataProjects';

export function Projects() {
  return (
    <>
      <hr
        id='projects'
        className='w-11/12'
      />
      <section className='flex min-h-screen w-11/12 flex-col justify-around divide-y divide-gray-600 py-4 text-sm text-gray-300 transition-all duration-500 ease-out'>
        {dataProjects.featured?.map((item) => (
          <div
            key={item.name}
            className='flex w-full flex-wrap justify-center gap-2 px-6 py-4 md:flex-nowrap md:justify-between md:gap-4'
          >
            <div className='order-2 flex flex-col gap-y-4 md:order-1 md:w-3/5'>
              <h3 className='text-center text-xl text-secondary-2 lg:text-start'>
                {item.name}
              </h3>
              <p className='text-center lg:text-start'>{item?.description}</p>
              <hr className='' />

              <div className='flex gap-x-2'>
                {item?.tags?.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>

              <div className='flex gap-x-4'>
                <a
                  href={item?.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-x-1 font-medium text-secondary-2 hover:text-white'
                >
                  <IconLink
                    size='24px'
                    fill={colors.secondary[2]}
                  />
                  Pagina Web
                </a>
                <a
                  href={item?.repo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-x-1 font-medium text-secondary-2 hover:text-white'
                >
                  <IconLink
                    size='24px'
                    fill={colors.secondary[2]}
                  />
                  Repositório Github
                </a>
              </div>
            </div>

            <img
              src={item?.imageSrc}
              alt={item?.name}
              className='order-1 w-72 rounded-md bg-black shadow-md shadow-gray-900 md:order-2'
            />
          </div>
        ))}
        <div className='flex flex-col gap-10 p-4'>
          <span>Em breve mais...</span>
          <div className='flex items-center justify-center text-2xl sm:justify-start sm:pl-6'>
            <span className='flex animate-bounce items-center justify-center rounded bg-white bg-opacity-30 px-6 py-1 text-primary-1 backdrop-blur-sm'>
              Projetos
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
