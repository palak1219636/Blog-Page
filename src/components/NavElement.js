import styled from "styled-components";
export const Nav = styled.div`
  position: fixed;
  display: flex;
  text-align: center;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: #282828;
`;

export const NavLink = styled.button`
  color: #e6dfdf;
  display: flex;
  font-size: 16px;
  align-items: center;
  text-decoration: none;
  border: none;
  text-align: center;
  background-color: transparent;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  &.active {
    color: #0a4189;
    border: transparent;
  }
`;
