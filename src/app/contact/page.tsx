import React from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contactInfo = [
  {
    label: "Phone",
    value: "731-607-9795",
    icon: <FontAwesomeIcon icon={"phone"} />,
  },
  {
    label: "Email",
    value: "tannorfranks@gmail.com",
    icon: <FontAwesomeIcon icon={"envelope"} />,
  },
  {
    label: "Linkedin",
    value: (
      <a
        href={"https://www.linkedin.com/in/tannorf/"}
        target="_blank"
        rel="noreferrer"
      >
        https://www.linkedin.com/in/tannorf/
      </a>
    ),
    icon: <FontAwesomeIcon icon={"coffee"} />,
  },
];

export default function Page() {
  return (
    <main className={styles.contact}>
      {contactInfo.map((info) => (
        <section key={info.label}>
          <h1>{info.label}:</h1>
          <div className={styles.contactItem}>
            {info.icon}
            <div>{info.value}</div>
          </div>
        </section>
      ))}
    </main>
  );
}
