import { Link } from "react-router-dom";
import "./nav.scss";

const Navbar = () => {
  return (
    <div>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="#!">🍀 Gradner</a>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/galery">Gallery</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>

              {/* <li>
                <a href="#!">Services</a>
                <ul className="nav-dropdown">
                  <li>
                    <a href="#!">Web Design</a>
                  </li>
                  <li>
                    <a href="#!">Web Development</a>
                  </li>
                  <li>
                    <a href="#!">Graphic Design</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
