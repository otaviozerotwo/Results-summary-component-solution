import summaryData from '../data/data.json';

export const fetchSummaryData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(summaryData);

      reject(new Error('Falha ao carregar dados.'));
    }, 1000);
  });
};