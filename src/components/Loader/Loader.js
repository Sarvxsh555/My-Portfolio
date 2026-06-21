import "./Loader.scss";
import logoName from "../../assets/images/logo-S.png";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <h1 className="loader-logo">
            <img src={logoName} alt="developer" />
          
        </h1>
        <p className="loader-text">Sarvesh Arun is thinking....</p>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
