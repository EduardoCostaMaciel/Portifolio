/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

import * as types from '../utils/types';
import { dataRepos } from '../utils/fetchApis';

import { Header } from '../components/Header';
import { Carousel } from '../components/Carousel';

export function Projects() {
  const [repos, setRepos] = useState<types.IPropsRepo[]>();
  const [error, setError] = useState('');

  const titlePage = 'Projects';

  const fetchApiRepos = async () => {
    const data = await dataRepos();
    setError('');
    if (!data.repos) {
      setError(data.message);
    }
    setRepos(data.repos);
  };

  useEffect(() => {
    fetchApiRepos();
  }, []);

  return (
    <section
      id='projects'
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

      <Carousel repos={repos} error={error} />

    </section >
  );
}
