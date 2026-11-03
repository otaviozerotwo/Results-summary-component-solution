const Button = ({ text }) => (
  <button className='bg-dark-gray-blue text-white w-full p-3 rounded-3xl font-semibold cursor-pointer hover:bg-linear-to-t hover:from-ultrasonic-blue hover:to-bright-indigo'>
    {text}
  </button>
);

export default Button;