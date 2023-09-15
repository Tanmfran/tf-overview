import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  return (
    <main className={styles.contact}>
      <section>
        <h1>Phone:</h1>
        <p>731-607-9795</p>
      </section>
      <section>
        <h1>Email:</h1>
        <div>
          <FontAwesomeIcon icon={"coffee"} />
        </div>
        <a href="mailto:tannorfranks@gmail.com">tannorfranks@gmail.com</a>
      </section>
      <section>
        <h1>Linkedin:</h1>
        <a href={"https://www.linkedin.com/in/tannorf/"} target="_blank" rel="noreferrer">
          https://www.linkedin.com/in/tannorf/
        </a>
      </section>
    </main>
  );
}
