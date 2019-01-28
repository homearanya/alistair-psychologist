import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
  &&&.active {
    color: #91d0cc;
  }
`;
export default function Menu() {
  return (
    <div className="col-md-6 text-center">
      <nav className="mainmenu_wrapper">
        <ul className="mainmenu nav sf-menu">
          <li>
            <StyledLink to="/" activeClassName="active">
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/about/" activeClassName="active">
              About Me
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/services/" activeClassName="active">
              Services
            </StyledLink>
          </li>
          {/* <li>
            <StyledLink to="/rates/" activeClassName="active">
              Rates
            </StyledLink>
          </li> */}
          <li>
            <StyledLink to="/articles/" activeClassName="active">
              Articles
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/contact/" activeClassName="active">
              Contact
            </StyledLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
