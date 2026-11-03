import MetricItem from '../MetricItem';

import iconReaction from '/assets/images/icon-reaction.svg';
import iconMemory from '/assets/images/icon-memory.svg';
import iconVerbal from '/assets/images/icon-verbal.svg';
import iconVisual from '/assets/images/icon-visual.svg';
import Button from '../Button';

const Summary = () => (
  <div className='px-6 pt-6 pb-9 md:w-80'>
      <h3 className='text-lg font-bold'>Summary</h3>

      <div className='flex flex-col gap-4 my-6'>
        <MetricItem
          bgColor='bg-light-red/5'
          textColor='text-light-red'
          icon={iconReaction} 
          name='Reaction'
          score='80'
        />
        <MetricItem
          bgColor='bg-orangey-yellow/5'
          textColor='text-orangey-yellow'
          icon={iconMemory} 
          name='Memory'
          score='92'
        />
        <MetricItem
          bgColor='bg-green-teal/5'
          textColor='text-green-teal'
          icon={iconVerbal} 
          name='Verbal'
          score='61'
        />
        <MetricItem
          bgColor='bg-cobalt-blue/5'
          textColor='text-cobalt-blue'
          icon={iconVisual} 
          name='Visual'
          score='73'
        />
      </div>

      <Button text='Continue' />
    </div>
);

export default Summary;