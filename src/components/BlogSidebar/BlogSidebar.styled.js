import styled from "styled-components"
export const Wrapper = styled.aside`
  margin: 0 !important;
  position: sticky;
  top: 120px;
`
export const List = styled.ul`
  list-style: none;
  @media (max-width: 992px) {
    padding: 0;
    /* display: flex; */
  }
`
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  a.active button {
    background: #d9be93;
  }

  /* @media (max-width: 992px) {
    &:not(:last-child) {
      margin-bottom: 0px;
      margin-right: 20px;
    }
  } */
`
