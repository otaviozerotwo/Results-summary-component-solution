export const calculateAverage = (values) => {
  if (!values || values.length === 0) {
    return 0;
  }

  const total = values.reduce((acc, item) => acc + item.score, 0);

  return Math.floor(total / values.length);
};