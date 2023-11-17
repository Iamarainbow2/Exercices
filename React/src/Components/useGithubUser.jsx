
import { useSWR } from 'swr';

 export const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Github user data');
  }

  return response.json();
};

export const useGithubUser = (initialUsername) => {
  const { data, error, mutate } = useSWR(
    initialUsername ? `https://api.github.com/users/${initialUsername}` : null
  );

  const getUserData = (username) => {
    
    if (username) {
      mutate(`https://api.github.com/users/${username}`);
    }
  };

  return {
    userData: data,
    loading: !error && !data,
    error,
    refetch: getUserData,
  };
};
