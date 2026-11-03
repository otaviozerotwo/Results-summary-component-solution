const Result = () => (
  <div className='flex flex-col items-center pt-6 pb-8 px-9 bg-linear-to-b from-majorelle-blue to-bright-indigo-2 rounded-b-3xl md:rounded-3xl md:w-fit'>
    <h1 className='text-lg text-light-lavender font-semibold'>Your Result</h1>
    <div className='flex flex-col items-center justify-center gap-3 h-40 w-40 rounded-full my-6 bg-linear-to-b from-ultrasonic-blue to-bright-indigo'>
      <p className='text-white text-6xl font-secondary font-bold tracking-widest mt-5'>76</p>
      <p className='text-soft-periwinke text-sm'>of 100</p>
    </div>

    <h2 className='text-white font-semibold text-2xl mb-3'>Great</h2>
    <p className='text-light-lavender text-center md:w-60'>You scored higher than 65% of the people who have taken these tests.</p>
  </div>
);

export default Result;