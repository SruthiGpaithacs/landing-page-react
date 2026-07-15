import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <span className="tag">TESTIMONIALS</span>

      <h2>
        Teams that <span>love</span> Clearwave
      </h2>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          ⭐⭐⭐⭐⭐
          <p>
            Clearwave has completely changed how our team works. Everything is
            organized and easy to manage.
          </p>
          <h4>John Smith</h4>
          <span>Product Manager</span>
        </div>

        <div className="testimonial-card">
          ⭐⭐⭐⭐⭐
          <p>
            The interface is clean, fast, and intuitive. Our productivity has
            improved significantly.
          </p>
          <h4>Sarah Lee</h4>
          <span>UI Designer</span>
        </div>

        <div className="testimonial-card">
          ⭐⭐⭐⭐⭐
          <p>
            The analytics dashboard gives us all the insights we need in one
            place.
          </p>
          <h4>David Brown</h4>
          <span>Team Lead</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;