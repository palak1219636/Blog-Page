import React, { useState } from "react";
import { Nav, NavLink } from "./NavElement";
import About from "../pages/About";
export default function NavBar() {
  const [AboutUs, setAboutUs] = useState(false);
  return (
    <div style={{ textAlign: "center" }}>
      <Nav>
        <NavLink
          onClick={() => {
            setAboutUs(true);
          }}
        >
          About Us
        </NavLink>
      </Nav>
      {AboutUs ? <About setAboutUs={setAboutUs} /> : ""}
    </div>
  );
}
