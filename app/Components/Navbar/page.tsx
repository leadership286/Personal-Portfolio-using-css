// components/Navbar.js
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <Link href="/" className="brand">Rimsha Ansari</Link>
        <div className="nav-links">
          <Link href="/Projects" className="nav-link">Projects</Link>
          <Link href="/Skills" className="nav-link">Skills</Link>
          <Link href="/Contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
