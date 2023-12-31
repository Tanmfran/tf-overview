import React from "react";
import Link from "next/link";
import styles from "./navigation.module.css";

const navItems = [
  {
    label: "About me",
    route: "/",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className={styles.navHeader}>
      <div className={styles.avatar}>TF</div>
      <nav className={styles.navigation}>
        {navItems.map((item) => (
          <Link className={styles.navItem} href={item.route} key={item.label}>
            <p>{item.label}</p>
          </Link>
        ))}
      </nav>
    </header>
  );
}
