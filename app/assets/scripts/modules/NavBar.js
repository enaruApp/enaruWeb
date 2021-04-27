import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ onLogout }) {
  return (
    <div>
      <nav id="navbar">
        <Link exact to="/">
          Нүүр
        </Link>
        <Link exact to="/login">
          Нэвтрэх
        </Link>
        <Link exact to="/signup">
          Бүртгүүлэх
        </Link>
        <Link exact to="/profile">
          Профайл
        </Link>
        <a onClick={onLogout}>Гарах</a>
      </nav>
    </div>
  );
}
