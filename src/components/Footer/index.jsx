const Footer = () => (
  <footer className="flex flex-col items-center justify-center gap-1 px-0 py-3 text-sm md:flex-row md:gap-2">
    <p className="flex gap-1">
      Challenge by
      <a
        className="font-bold text-bright-indigo-2"
        href="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV"
        target="_blank"
        rel="noreferrer noopener"
      >
        Frontend Mentor
      </a>
    </p>
    <div className="md:block md:h-1 md:w-1 md:bg-bright-indigo-2 md:rounded-full"></div>
    <p className="flex gap-1">
      Coded by
      <a
        className="font-bold text-bright-indigo-2"
        href="https://www.frontendmentor.io/profile/otaviozerotwo" target="_blank"
        rel="noreferrer noopener"
      >
        Otávio Cardoso
      </a>
    </p>
  </footer>
);

export default Footer;