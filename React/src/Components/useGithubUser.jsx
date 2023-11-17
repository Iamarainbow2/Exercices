
import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Github user data');
  }

  return response.json();
};

const useGithubUser = (username) => {
  
  if (username === null) {
    return {
      userData: null,
      loading: false,
      error: null,
    };
  }

  const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher);

  return {
    userData: data,
    loading: !error && !data,
    error,
  };
};

export default useGithubUser;
