import Result from '../Result';
import Summary from '../Summary';

const Card = () => (
  <div className='bg-white flex flex-col md:flex-row md:rounded-3xl md:shadow-lg'>
    <Result />
    <Summary />
  </div>
);

export default Card;