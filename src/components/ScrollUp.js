import React from "react";
import ScrollToTop from "react-scroll-up";
import styled from "styled-components";

const StyledScrollToTop = styled(ScrollToTop)`
  &&& {
    background: rgba(0, 0, 0, 0.4) none repeat scroll 0 0;
    bottom: 45px;
    color: #ffffff;
    cursor: pointer;
    display: block;
    font-size: 28px;
    height: 45px;
    line-height: 40px;
    position: fixed;
    right: 12px;
    text-align: center;
    width: 45px;
    z-index: 9999;

    :hover {
      background-color: #000;
    }
  }
`;

const IStyled = styled.i`
  &&& {
    background: rgba(145, 208, 204, 0.7) none repeat scroll 0 0;
    bottom: 45px;
    color: #ffffff;
    cursor: pointer;
    display: block;
    font-size: 28px;
    height: 45px;
    line-height: 40px;
    position: fixed;
    right: 12px;
    text-align: center;
    width: 45px;

    :hover {
      background-color: #91d0cc;
    }
  }
`;

export default function ScrollUp() {
  return (
    <StyledScrollToTop style={{ position: "static" }} showUnder={160}>
      <IStyled className="fa fa-angle-up" />
    </StyledScrollToTop>
  );
}
