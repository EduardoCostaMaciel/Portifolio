import { PushPin, Student } from 'phosphor-react';
import { skills } from '../utils/skills';

const minimunSummaryDatesSize = 15;
const amountOfDaysToFill = minimunSummaryDatesSize - skills.length;

export function Experience() {
  return (
    <section className='mt-10 mb-16 flex flex-col items-center justify-center bg-primary-200 rounded-lg'>
      <h1 className='flex items-center justify-center gap-1'>
        <Student size={20} weight='fill' className='text-primary-300' />
        Minhas Skills
      </h1>

      <article className='w-11/12 flex flex-wrap items-center justify-center gap-8 pt-8 text-xs md:max-w-3xl'>
        <div className='flex flex-wrap items-center justify-center gap-4 text-start'>
          {skills.map((skill) => (
            <div
              className='bg-opaced-100 rounded-md shadow shadow-primary-100'
              key={skill.title}
            >
              <small className='w-24 p-1 flex items-start justify-center bg-primary-200 text-base rotate-16 rounded-md shadow shadow-primary-100'>
                {skill.title}
                <PushPin
                  size={24}
                  className='absolute -top-4 right-6 text-primary-300'
                  weight='fill'
                />
              </small>
              <small className='pl-1 text-xs '>{skill.provenance}</small>
            </div>
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className='flex flex-wrap justify-center gap-4'>
                <small className='w-24 p-1.5 bg-zinc-900 text-center text-lg -rotate-5 rounded-lg opacity-40 shadow shadow-primary-100'>
                  Em breve
                </small>
              </div>
            ))}
        </div>
      </article>
    </section>
  );
}
