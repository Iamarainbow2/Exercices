
import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Github user data');
  }

  return response.json();
};

const useGithubUser = (initialUsername) => {
  const { data, error, mutate } = useSWR(
    initialUsername ? `https://api.github.com/users/${initialUsername}` : null,
    fetcher
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

export default useGithubUser;
