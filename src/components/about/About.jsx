import "bootstrap/dist/css/bootstrap.min.css";
import hamza from "../../assets/hamza.jpg";

const About = () => {
  return (
    <div style={{ backgroundColor: "cyan", width: "100vw", height:"100vh" }}>
      <div className="card" style={{ width: "18rem", margin: "auto", paddingTop:"5rem" }}>
        <img src={hamza} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Hamza PALA</h5>
          <p className="card-text">To cook is my passion like codding..</p>
        </div>
      </div>
    </div>
  );
};

export default About;
