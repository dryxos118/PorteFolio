import { FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";

const HomePage = () => {
  return (
    <section className="bg-white w-100 h-75 text-center">
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <div className="card mb-3">
              <img
                src="../Images/fondEcran.png"
                className="card-img-top"
                alt="CV"
              />
              <div className="card-body">
                <h5 className="card-title">Cv Alexis Hu</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <h3>Diplome préparer</h3>
          </div>
          <div className="col-6">
            <h3>Langage maitriser :</h3>
            <ol className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">HTML</div>
                </div>
                <span className="badge bg-black rounded-pill">
                  <FaHtml5 color="#e34c26" />
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">CSS</div>
                </div>
                <span className="badge bg-black rounded-pill">
                  <FaCss3 color="#264de4" />
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">JavaScrip</div>
                </div>
                <span className="badge bg-black rounded-pill">
                  <FaJs color="#f0db4f" />
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">React</div>
                </div>
                <span className="badge bg-black rounded-pill">
                  <FaReact color="#61dafb" />
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
