import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing">
      <p className="pricing-tag">PRICING</p>

      <h2>Choose the perfect plan</h2>

      <div className="pricing-cards">
        <div className="price-card">
          <h3>Starter</h3>
          <h1>$19</h1>
          <p>/month</p>
          <button>Choose Plan</button>
        </div>

        <div className="price-card active">
          <h3>Professional</h3>
          <h1>$49</h1>
          <p>/month</p>
          <button>Get Started</button>
        </div>

        <div className="price-card">
          <h3>Enterprise</h3>
          <h1>$99</h1>
          <p>/month</p>
          <button>Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;