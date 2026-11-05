import { useEffect, useState } from 'react'
import { fetchSummaryData } from '../services/api';

export const useSummaryData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchSummaryData();
        setData(result);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Não foi possível carregar o resumo.');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, isLoading, error };
};