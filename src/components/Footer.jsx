/* eslint-disable react/no-unescaped-entities */
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="foot">
      <div className="footCenter">
        <p className="footTxt">
          Merci d'être venu voir mon Portfolio
          <br />
          Hésiter pas a me contacter si mon profil vous intéresse
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn  me-md-2" type="button">
            <a href="#">
              <FaArrowUp />
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
