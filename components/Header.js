import React from "react";
import headerStyle from "../styles/Header.module.css";

export default function Header() {
  const x = 5;
  return (
    <div>
      <h1 className={headerStyle.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyle.description}>
        Keep up to date with the latest web dev news
      </p>
    </div>
  );
}
