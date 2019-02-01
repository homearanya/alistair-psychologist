import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledButton = styled.button`
  display: inline-block;
  border: none;
  padding: 17px 30px;
  margin: 0;
  text-decoration: none;
  background: #4bb0a9;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  :hover,
  :focus {
    background: #d9be93;
  }

  :active {
    transform: scale(0.99);
  }
`;

export default function Button(props) {
  return (
    <React.Fragment>
      {props.whereTo[0] === "#" ? (
        <a href={props.whereTo}>
          <StyledButton>{props.text}</StyledButton>
        </a>
      ) : (
        <Link to={props.whereTo}>
          <StyledButton>{props.text}</StyledButton>
        </Link>
      )}
    </React.Fragment>
  );
}
