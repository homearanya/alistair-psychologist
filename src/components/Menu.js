import React from "react";
import { Link } from "gatsby";

export default function Menu() {
  return (
    <div className="col-md-6 text-center">
      <nav className="mainmenu_wrapper">
        <ul className="mainmenu nav sf-menu">
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/services/" activeClassName="active">
              Services
            </Link>
          </li>
          <li>
            <Link to="/rates/" activeClassName="active">
              Rates
            </Link>
          </li>
          <li>
            <Link to="/articles/" activeClassName="active">
              Articles
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* <span className="toggle_menu hidden-xs hidden-sm">
        <span />
      </span> */}
    </div>
  );
}
