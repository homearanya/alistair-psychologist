import styled from "styled-components";

const NonClickableMenuItem = styled.button.attrs(() => ({ type: "button" }))`
  display: block;
  background: none;
  border: none;
  padding: 10px 3.5em 10px 15px;
  margin: 0;
  text-decoration: none;
  color: ${props => (props.servicePage ? "#91d0cc" : "white")};
  font-family: "Playfair Display", serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  cursor: auto;
  text-align: left;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;

  :hover,
  :focus {
    background: none;
    color: #91d0cc;
  }

  &.withArrow::after {
    font-family: "FontAwesome";
    content: "\f107";
    position: absolute;
    right: 2em;
    height: 0;
    width: 0;
    font-size: 20px;
  }
  @media (min-width: 992px) {
    color: ${props => (props.servicePage ? "#91d0cc" : "#444444")};
    margin: 0 15px;
    padding: ${props => (props.$isSticky ? "25px 0" : "25px 0")};

    &.withArrow::after {
      content: none;
    }
  }
`;
export default NonClickableMenuItem;
