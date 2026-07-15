import "./Clarity.css";

function Clarity() {
  return (
    <section className="clarity">

      <div className="clarity-heading">
        <span>FEATURES</span>

        <h2>
          Built for <span>clarity</span>
          <br />
          at every scale
        </h2>

        <p>
          Powerful tools designed to keep your team focused and productive.
        </p>
      </div>

      <div className="clarity-grid">

        <div className="feature-box">
          <h3>Every metric, one calm surface</h3>

          <ul>
            <li>✔ Real-time analytics</li>
            <li>✔ Smart dashboards</li>
            <li>✔ Team insights</li>
          </ul>
        </div>

        <div className="feature-box">
          <h3>Automated workflows</h3>

          <ul>
            <li>✔ Save time</li>
            <li>✔ Reduce manual work</li>
            <li>✔ Faster delivery</li>
          </ul>
        </div>

        <div className="feature-box">
          <h3>Communication made easy</h3>

          <ul>
            <li>✔ Team chat</li>
            <li>✔ Notifications</li>
            <li>✔ Mentions</li>
          </ul>
        </div>

        <div className="feature-box">
          <h3>Powerful reports</h3>

          <ul>
            <li>✔ Export data</li>
            <li>✔ Weekly reports</li>
            <li>✔ PDF support</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Clarity;