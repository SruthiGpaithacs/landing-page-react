import "./Workspace.css";

import screen1 from "../assets/tm-622-screen-01.jpg";
import screen2 from "../assets/tm-622-screen-02.jpg";
import screen3 from "../assets/tm-622-screen-03.jpg";
import screen4 from "../assets/tm-622-screen-04.jpg";
import screen5 from "../assets/tm-622-screen-05.jpg";

import "./Workspace.css";

function Workspace() {
  return (
    <section className="workspace">

      <span className="tag">WORKSPACE</span>

      <h2>
        Your workspace,
        <br />
        <span>in your pocket</span>
      </h2>

      <p>
        The Clearwave mobile app brings every dashboard,
        task and notification to you wherever you are.
      </p>

<div className="phones">

  <img src={screen1} alt="screen1" className="phone side" />

  <img src={screen2} alt="screen2" className="phone" />

  <img src={screen3} alt="screen3" className="phone center-phone" />

  <img src={screen4} alt="screen4" className="phone" />

  <img src={screen5} alt="screen5" className="phone side" />

</div>

      <div className="slider">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>

    </section>
  );
}

export default Workspace;