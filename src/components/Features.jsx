import "./Features.css";

function Features() {
  return (
    <section className="features">

      <div className="feature-heading">
        <span>FEATURES</span>
        <h2>Why teams choose Clearwave</h2>
        <p>
          Everything you need to manage projects efficiently.
        </p>
      </div>

      <div className="feature-grid">

        <div className="feature-card">
          <div className="icon">📋</div>
          <h3>Task Management</h3>
          <p>Create, organize and track tasks with ease.</p>
        </div>

        <div className="feature-card">
          <div className="icon">💬</div>
          <h3>Team Chat</h3>
          <p>Communicate instantly with your teammates.</p>
        </div>

        <div className="feature-card">
          <div className="icon">📊</div>
          <h3>Analytics</h3>
          <p>Monitor performance with live dashboards.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;