/* eslint-disable prettier/prettier */
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  Link as IconLink,
} from 'phosphor-react';
import { useRef } from 'react';
import { IPropsRepo } from '../utils/types';

import { WarningError } from './WarningError';

export function Carousel({
  repos,
  error,
}: {
  repos: IPropsRepo[] | undefined;
  error: string;
}) {
  const carouselRef = useRef<HTMLUListElement>(null);

  const reposCarousel = [
    'Shopping_List',
    'App_Delivery',
    'App_Recipes',
    'The_Blogs_Api',
    'To_Do_List',
  ];

  const handleLeftClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
  };

  const handleRightClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  };

  return (
    <div className='my-8 w-90vw max-w-3xl flex flex-col gap-4 sm:max-w-xl lg:max-w-3xl'>
      <ul
        ref={carouselRef}
        className='
          overflow-x-auto scroll-smooth bg-slate-700
          w-full p-2 flex gap-2 rounded-md shadow shadow-primary-100
        '
      >
        {error && <WarningError err={error} />}

        {repos?.map((projec) =>
          reposCarousel.includes(projec.name) ? (
            <li
              key={projec.id}
              className='
                p-2 w-60vw sm:w-30vw
                flex flex-col items-center justify-between gap-4
                bg-slate-800 text-center
                rounded-lg
                flex-none
              '
            >
              <span className='flex flex-col justify-between gap-2'>
                <small className=''>{projec.name}</small>
                <small className=''>{projec.tags?.join(' | ')}</small>
              </span>
              <div className='w-full flex flex-col gap-2'>
                <a
                  href={projec.urlRepo}
                  target='_blank'
                  rel='noreferrer'
                  className='p-1 w-full flex items-center justify-center gap-1 text-indigo-400 bg-indigo-900 rounded-lg shadow-sm shadow-indigo-400'
                >
                  Repo Github
                  <IconLink size={18} weight='fill' />
                </a>

                {projec.urlPage ? (
                  <a
                    href={projec.urlPage}
                    target='_blank'
                    rel='noreferrer'
                    className={`
                      ${!projec.urlPage ? 'cursor-not-allowed' : 'cursor-pointer'}
                      p-1 flex items-center justify-center gap-1 w-full bg-indigo-900 text-indigo-400 rounded-lg shadow-sm shadow-indigo-400
                    `}
                  >
                    Link Page
                    <IconLink size={18} weight='fill' />
                  </a>
                ) : (
                  <button
                    type='button'
                    disabled={!projec.urlPage}
                    className={`
                      ${!projec.urlPage ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                      p-1 flex items-center justify-center gap-1 bg-indigo-900 text-indigo-400 rounded-lg shadow-sm shadow-indigo-400
                    `}
                  >
                    Em breve
                    <IconLink size={18} weight='fill' />
                  </button>
                )}
              </div>
            </li>
          ) : null
        )}
      </ul>
      <div className='w-full flex justify-center'>
        <button
          type='button'
          className='flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          onClick={handleLeftClick}
        >
          <ArrowCircleLeft
            size={32}
            weight='fill'
            className='
              w-10 h-10 sm:w-10 sm:h-10
              rounded-full shadow shadow-primary-100
              text-indigo-900 bg-primary-100
              hover:bg-indigo-400 group-focus:ring-4 group-focus:ring-zinc-500
            '
          />
        </button>
        <button
          type='button'
          className='flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          onClick={handleRightClick}
        >
          <ArrowCircleRight
            size={32}
            weight='fill'
            className='
              w-10 h-10 sm:w-10 sm:h-10
              rounded-full shadow shadow-primary-100
              text-indigo-900 bg-primary-100
              hover:bg-indigo-400 group-focus:ring-4 group-focus:ring-zinc-500
            '
          />
        </button>
      </div>
    </div>
  );
}
