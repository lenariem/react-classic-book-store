import React from "react";
import "./Footer.css";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright orange accent-4">
        <div className="container">
          <p>© {new Date().getFullYear()} Copyright Elena Riemer</p>
          <button
            className="btn teal lighten-1"
            title="Go to top"
            onClick={() => scrollToTop()}
          >
            <i className="material-icons">arrow_upward</i>
          </button>
        </div>
      </div>
    </footer>
  );
}
