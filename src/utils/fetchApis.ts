import * as types from './types';

export const dataRepos = async () => {
  try {
    const userUrl = 'https://api.github.com/users/EduardoCostaMaciel/repos';
    const res = await fetch(userUrl);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        'Ops ! algum error nos dados externo "tente nova mente mais tarde" !'
      );
    }

    const repos = data?.map((repo: types.IPropsData) => ({
      id: repo.id,
      name: repo.name,
      urlPage: repo.homepage,
      urlRepo: repo.html_url,
      tags: repo.topics,
    }));

    return { repos };
  } catch (err: Error | any) {
    const { message } = err;
    return { message };
  }
};
