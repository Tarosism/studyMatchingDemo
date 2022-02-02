import React from "react";
import { Navbar } from "../styles/Nav.styled";
import LogoImg from "../asset/codeLogo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <Navbar>
        <div
          style={{
            width: "100%",
            margin: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img
              src={LogoImg}
              style={{ width: "127px", height: "33px", cursor: "pointer" }}
            />
          </Link>
          <div style={{ margin: "0px 24px", display: "flex" }}></div>
        </div>
      </Navbar>
    </>
  );
}
