import { useSummaryData } from '../../../hooks/useSummaryData';
import SummaryItem from './SummaryItem';
import Button from '../../Button';

const SummaryCard = () => {
  const { data, isLoading, error } = useSummaryData();

  return (
    <section className='flex flex-col justify-between px-9 py-9 md:w-86'>
      <h3 className='text-xl font-bold'>Summary</h3>

      {isLoading && <p className='text-center font-bold text-dark-gray-blue/50'>Carregando resultados...</p>}

      {error && <p className='text-center font-bold text-light-red/50'>{error}</p>}

      {!isLoading && !error && (
        <ul className='flex flex-col gap-4 my-6'>
          {data.map((item) => (
            <SummaryItem
              key={item.category}
              category={item.category}
              score={item.score}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </ul>
      )}

      <Button text='Continue' />
    </section>
  );
}

export default SummaryCard;