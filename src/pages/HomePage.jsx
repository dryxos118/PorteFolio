/* eslint-disable react/no-unescaped-entities */
import { FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";

const HomePage = () => {
  return (
    <section className="bg-white w-100 h-75">
      <div className="container mt-5">
        <div className="row">
          <iframe
            src="../Images/CV_alex.pdf"
            alt="CV"
            height={"500px"}
            width={"500px"}
            loading="eager"
          />
        </div>
        <div className="row mt-5">
          <div className="col-md-5 col-12">
            <h3>Diplome préparer</h3>
            <p className="fw-medium lh-lg">
              Je suis actuellement étudiant a ForEach Academy
              <br />
              Je prépare un Bachelor développeur Web et Web mobile sur un durée
              de 2 ans
              <br />
              Je cherche actuellement un contrat d'apprentissage dans ce domaine
              d'activité
              <br />
              Vous êtes intéresser par mon profils hésiter pas a me contacter
              via LinkedIn ou par mail alexishu59134@gmail.com
            </p>
          </div>
          <div className="col-md-5 col-12">
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
                  <div className="fw-bold">JavaScript</div>
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
