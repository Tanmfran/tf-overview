import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <article>
          <h1>Tannor Franks</h1>
          <p>Born in Merced, California</p>
          <p>Lives and works in Nashville, Tennessee</p>
        </article>
        <br></br>
        <article>
          <header>
            <h1>Education</h1>
            <p>University of Tennessee at Martin</p>
          </header>
          <p>
            Bachelor of Science: Engineering With a Concentration in Electrical
          </p>
          <p>Minor: Japanese</p>
        </article>
      </section>
    </main>
  );
}
