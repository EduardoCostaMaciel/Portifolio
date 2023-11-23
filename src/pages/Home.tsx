import { dataComments } from '../utils/dataComments';

export function Home() {
  return (
    <section
      id='home'
      className='border- relative flex min-h-screen w-11/12 flex-col items-center justify-around gap-6 text-zinc-300 transition-all duration-700 ease-out'
    >
      <header className='gap-y- mt-20 ml-6 self-start'>
        <h1 className='text-primary-30 text-lg font-semibold sm:text-3xl'>
          Desenvolvedor Full Stack
        </h1>
        <p className='mt-2 w-11/12 sm:w-3/5'>
          Bem-vindo(a) ao meu Portfólio!
          <br />
          Eu sou Eduardo Costa,
          <br />
          Sinta-se à vontade para explorar meu portfólio. Estou ansioso para
          fazer parte de projetos empolgantes e ajudar a transformar ideias em
          realidade por meio da programação.
        </p>
      </header>

      <div className='flex w-screen flex-col items-center bg-gray-800'>
        <h1 className='bg-slate-20 self-start px-4 pt-2 text-sm text-secondary-2 sm:px-10'>
          Comments
        </h1>
        <div className='bg-gray-90 flex w-11/12 flex-wrap justify-center gap-2 py-2 shadow-md'>
          {dataComments.map((data) => (
            <div
              key={data.id}
              className='flex w-[85%] flex-col gap-y-4 border border-gray-600 bg-gray-700 p-4 shadow shadow-gray-800 sm:w-[70%] md:w-[48%] lg:w-[32%]'
            >
              <div className='flex gap-x-6'>
                <img
                  src={data.img.url}
                  alt={data.img.alt}
                  style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ' }}
                  className='ml-6 h-16'
                />
                <h3 className='bg-slate- mt-2'>{data.name}</h3>
              </div>
              <p className='bg-slate-30 flex-gro text-center text-sm'>
                {data.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
