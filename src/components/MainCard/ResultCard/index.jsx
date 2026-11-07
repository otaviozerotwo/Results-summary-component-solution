import { useMemo } from 'react';
import { useSummaryData } from '../../../hooks/useSummaryData';
import { calculateAverage } from '../../../utils/calculateAverage';

const ResultCard = () => {
  const { data } = useSummaryData();

  const finalScore = useMemo(() => calculateAverage(data), [data]);

  return (
    <section className='flex flex-col items-center justify-between py-9 px-9 bg-linear-to-b from-majorelle-blue to-bright-indigo-2 rounded-b-3xl md:rounded-3xl md:w-86'>
      <h1 className='text-xl text-light-lavender font-semibold'>Your Result</h1>
      <div className='flex flex-col items-center justify-center gap-3 h-44 w-44 rounded-full my-6 bg-linear-to-b from-ultrasonic-blue to-bright-indigo'>
        <p className='text-white text-6xl font-secondary font-bold tracking-widest mt-5'>{finalScore}</p>
        <p className='text-soft-periwinke text-sm'>of 100</p>
      </div>

      <h2 className='text-white font-semibold text-2xl mb-3'>Great</h2>
      <p className='text-light-lavender text-base text-center px-6'>You scored higher than 65% of the people who have taken these tests.</p>
    </section>
  );
};

export default ResultCard;