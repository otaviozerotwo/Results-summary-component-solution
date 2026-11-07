export const fetchSummaryData = async () => {
  const response = await fetch(
    `${import.meta.env.BASE_URL}data/data.json`
  );

  if (!response.ok) {
    throw new Error(`Failed to load data. HTTP ${response.status}`);
  }

  const data = await response.json();

  return data;
};