import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-badge">
          ⭐ Rated #1 Productivity SaaS of 2025
        </div>

        <h1>
          Your workflow, <br />
          <span>finally clear.</span>
        </h1>

        <p>
          Clearwave unifies your team's projects, data and
          communication into one calm, focused workspace.
          Less noise, more done.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Free →
          </button>

          <button className="secondary-btn">
            ▶ See it in action
          </button>
        </div>

        <div className="hero-features">
          <span>🛡️ SOC 2 Certified</span>
          <span>⚡ 99.9% Uptime SLA</span>
          <span>👥 65k+ Teams</span>
        </div>

      </div>

      <div className="hero-right">

        <div className="dashboard">

          <div className="dashboard-top">
            <div>
              <h4>Team Performance</h4>
            </div>

            <div className="growth">
              ↑34%
              <small>Output this month</small>
            </div>
          </div>

          <div className="chart">
            <div className="bar small"></div>
            <div className="bar medium"></div>
            <div className="bar tall"></div>
            <div className="bar medium"></div>
            <div className="bar tallest"></div>
          </div>

          <div className="cards">

            <div className="card">
              <h3>94%</h3>
              <p>Task Flow</p>
            </div>

            <div className="card">
              <h3>2.4s</h3>
              <p>Active Users</p>
            </div>

            <div className="card">
              <h3>18h</h3>
              <p>Saved / week</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;