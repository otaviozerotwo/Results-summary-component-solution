import ResultCard from './ResultCard';
import SummaryCard from './SummaryCard';

const MainCard = () => (
  <div className='bg-white flex flex-col md:flex-row md:rounded-3xl md:shadow-lg'>
    <ResultCard />
    <SummaryCard />
  </div>
);

export default MainCard;