import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="foot">
      <div className="footCenter">
        <p className="footTxt"></p>
        <button className="btnReturn">
          <a href="#">
            <FaArrowUp />
          </a>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
