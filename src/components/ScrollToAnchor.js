import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const StyledLink = styled(Link)`
  && {
    :focus {
      color: #91d0cc;
    }

    :hover {
      cursor: pointer;
      color: #d9be93;
    }
  }
`;

export default function ScrollToAnchor(props) {
  return (
    <StyledLink to={props.to} smooth={true} duration={300}>
      {props.children}
    </StyledLink>
  );
}
