import { useSummaryData } from '../../../hooks/useSummaryData';
import SummaryItem from './SummaryItem';
import Button from '../../Button';

const SummaryCard = () => {
  const { data, isLoading, error } = useSummaryData();

  return (
    <section className='px-6 pt-6 pb-9 md:w-80'>
      <h3 className='text-lg font-bold'>Summary</h3>

      {isLoading && <p>Carregando resultados...</p>}

      {error && <p>{error}</p>}

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