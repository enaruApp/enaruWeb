import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="./assets/images/logoSmall.png" alt="logo" />
      </div>

      <nav className="sidebar-nav">
        <Link className="sidebar-link" to="/">
          Нэгдэл
        </Link>
        <Link className="sidebar-link" to="/">
          Төсөл
        </Link>
        <Link className="sidebar-link" to="/">
          Кластер
        </Link>
        <Link className="sidebar-link" to="/">
          Боловсрол
        </Link>
        <Link className="sidebar-link" to="/">
          Гишүүнчлэл
        </Link>
        <Link className="sidebar-link" exact to="/login">
          Нэвтрэх
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
