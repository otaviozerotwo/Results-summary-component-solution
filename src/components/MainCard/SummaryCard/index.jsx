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

      {/* <div className='flex flex-col gap-4 my-6'>
        <SummaryItem
          bgColor='bg-light-red/5'
          textColor='text-light-red'
          icon={iconReaction} 
          name='Reaction'
          score='80'
        />
        <SummaryItem
          bgColor='bg-orangey-yellow/5'
          textColor='text-orangey-yellow'
          icon={iconMemory} 
          name='Memory'
          score='92'
        />
        <SummaryItem
          bgColor='bg-green-teal/5'
          textColor='text-green-teal'
          icon={iconVerbal} 
          name='Verbal'
          score='61'
        />
        <SummaryItem
          bgColor='bg-cobalt-blue/5'
          textColor='text-cobalt-blue'
          icon={iconVisual} 
          name='Visual'
          score='73'
        />
      </div> */}

      <Button text='Continue' />
    </section>
  );
}

export default SummaryCard;