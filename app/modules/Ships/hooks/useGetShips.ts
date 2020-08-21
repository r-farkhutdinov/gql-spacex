import { useGetShipsQuery } from '../../../__generated__/schema';

export const useGetShips = (limit?: number, offset?: number) => {
  const { data, loading, error } = useGetShipsQuery({
    variables: {
      limit,
      offset,
    },
  });

  return {
    data,
    loading,
    error,
  };
};
