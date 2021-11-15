import React from "react";
import './Header.css';
import Logo from "../../img/logo.png";
import GitIcon from "../../img/github.svg";
/* import { Link } from "react-router-dom"; */

export default function Header() {
  return (
    <header>
      <nav className="orange accent-4">
        <div className="nav-wrapper orange accent-4">
          {/* <Link to="/react-movie-search/"> */}
            <div className="brand-logo">
              React Movies <img src={Logo} alt="logo" className="logoIcon" />
            </div>
          {/* </Link> */}

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/lenariem/react-shop"
                title="Repo on GitHub"
                target="blank"
              >
                <img src={GitIcon} alt="github link" className="gitIcon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
