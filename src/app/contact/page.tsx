import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.contact}>
      <section>
        <h1>Phone:</h1>
        <p>731-607-9795</p>
      </section>
      <section>
        <h1>Email:</h1>
        <a href="mailto:tannorfranks@gmail.com">tannorfranks@gmail.com</a>
      </section>
      <section>
        <h1>Linkedin:</h1>
        <a href={"https://www.linkedin.com/in/tannorf/"} target="_blank">
          https://www.linkedin.com/in/tannorf/
        </a>
      </section>
    </main>
  );
}
