import "./FAQ.css";

function FAQ() {
  return (
    <section className="faq">
      <span className="faq-tag">FAQ</span>

      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        <div className="faq-item">
          <h3>What is Clearwave?</h3>
          <p>
            Clearwave is a productivity platform that helps teams manage projects,
            tasks, and communication in one place.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can I try it for free?</h3>
          <p>
            Yes! You can start with a free trial before choosing a paid plan.
          </p>
        </div>

        <div className="faq-item">
          <h3>Does it support mobile devices?</h3>
          <p>
            Yes. It works on desktop, tablet, and mobile devices.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can I cancel anytime?</h3>
          <p>
            Absolutely. You can cancel your subscription whenever you want.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;