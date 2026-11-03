const MetricItem = ({ name, score, icon, bgColor, textColor }) => (
  <div className={`flex items-center justify-between ${bgColor} rounded-lg px-4 py-3`}>
    <div className='flex items-center gap-2'>
      <img src={icon} alt="" />
      <span className={`${textColor} font-bold`}>{name}</span>
    </div>
    <span className='font-bold'>{score} <span className='text-dark-gray-blue/50'>/ 100</span></span>
  </div>
);

export default MetricItem;