import { bgColorMapping, textColorMapping } from '../../../../utils/colorMapping';

const SummaryItem = ({ category, score, icon, color }) => (
  <li className={`flex items-center justify-between ${bgColorMapping[color]} rounded-lg px-4 py-3`}>
    <div className='flex items-center gap-2'>
      <img src={icon} alt={`${category} icon`} />
      <span className={`${textColorMapping[color]} font-bold`}>{category}</span>
    </div>
    <span className='font-bold text-dark-gray-blue'>{score} <span className='text-dark-gray-blue/50'>/ 100</span></span>
  </li>
);

export default SummaryItem;