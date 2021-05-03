import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import SideBar from "./SideBar";

export default function NavBar({ onLogout }) {
  return (
    <div className="site-header">
      <div className="site-header__logo">
        <img src="./assets/images/logoAkok.png" alt="enaru logo" />
      </div>
      <div className="hamburger-area">
        <Hamburger />
        <SideBar />
      </div>
      <nav className="primary-nav">
        <Link className="nav-link" to="/">
          Нэгдэл
        </Link>
        <Link className="nav-link" to="/">
          Төсөл
        </Link>
        <Link className="nav-link" to="/">
          Кластер
        </Link>
        <Link className="nav-link" to="/">
          Боловсрол
        </Link>
        <Link className="nav-link" to="/">
          Гишүүнчлэл
        </Link>
        <Link className="nav-link" exact to="/login">
          Нэвтрэх
        </Link>
        {/* 
        <a className="nav-item" onClick={onLogout}>
          Гарах
        </a>
        */}
      </nav>
    </div>
  );
}
