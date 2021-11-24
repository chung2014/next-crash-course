import Link from "next/link";
import React from "react";
import navStyle from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
