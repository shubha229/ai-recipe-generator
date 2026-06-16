import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-glow"></div>

      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-circle">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 10C4.8 10 3 8.2 3 6C3 3.8 4.8 2 7 2C8.4 2 9.6 2.7 10.3 3.7C11 2.1 12.6 1 14.5 1C17 1 19 3 19 5.5C19 5.7 19 5.8 19 6C20.7 6.2 22 7.7 22 9.5C22 11.4 20.4 13 18.5 13H7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 13V22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 13V22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 18H16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="logo-text">
            <span className="logo-title">SMART CHEF</span>
            <span className="logo-subtitle">AI-Powered Culinary Assistant</span>
          </div>
        </Link>

        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/saved"
            className={`nav-link ${
              location.pathname.includes("/saved") ? "active" : ""
            }`}
          >
            Saved Recipes
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;