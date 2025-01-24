const Footer = () => {
    return (
      <footer className="bg-[#001f3f] text-white py-5 text-center">
        <ul className="list-none p-0 mb-4">
          <li className="inline mx-4">
            <a
              href="#"
              className="text-white text-lg transition-colors duration-300 hover:text-[#20641d]"
            >
              Facebook
            </a>
          </li>
          <li className="inline mx-4">
            <a
              href="#"
              className="text-white text-lg transition-colors duration-300 hover:text-[#20641d]"
            >
              Twitter
            </a>
          </li>
          <li className="inline mx-4">
            <a
              href="#"
              className="text-white text-lg transition-colors duration-300 hover:text-[#20641d]"
            >
              Instagram
            </a>
          </li>
        </ul>
        <p>Email: info@firnaswelfare.org | Phone: +123 456 789</p>
      </footer>
    );
  };
  
  export default Footer;
  