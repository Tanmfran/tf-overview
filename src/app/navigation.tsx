import React from "react";
import Link from "next/link";
import styles from "./navigation.module.css";

const Navbar = () => {
  const navItems = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Signup",
      route: "/signup",
    },
    {
      label: "Contact",
      route: "/",
    },
  ];

  return (
    <header className={styles.navHeader}>
      <h1>Header</h1>
      <nav className={styles.navigation}>
        {navItems.map((item) => (
          <Link className={styles.navItem} href={item.route} key={item.label}>
            <p>{item.label}</p>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
