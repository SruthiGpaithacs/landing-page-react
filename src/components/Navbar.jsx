import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>Clearwave</h2>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>

      <div className="buttons">
        <a href="#" className="login">Log In</a>
        <button>Start Free Trial</button>
      </div>
    </header>
  );
}

export default Navbar;