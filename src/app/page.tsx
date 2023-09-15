import Image from "next/image";
import styles from "./page.module.css";

const jobDetails = [
  {
    name: "ERMCO",
    jobTitle: "Associate Design Engineer",
    date: "May 2017 - May 2018",
    location: "Dyersburg, TN",
    details: [],
  },
  {
    name: "Core10",
    jobTitle: "Software Engineer II",
    date: "July 2018 - August 2018",
    location: "Martin, TN",
    details: [],
  },
  {
    name: "Optum",
    jobTitle: "Software Engineer II",
    date: "August 2022 - Feb 2021",
    location: "Nashville, TN",
    details: [],
  },
  {
    name: "Built Technologies",
    jobTitle: "Senior Software Engineer",
    date: "Feb 2021 - Current",
    location: "Nashville, TN",
    details: [
      "Contributes to org-wide reference architecture documentation and tooling",
      "Technical lead for a team of 5",
      "Created the foundation for stuff",
      "Integrated GraphQL into the organization's tech stack which eventually led to graphql being the generally accepted solution",
      "Created a shared config utility to help ",
    ],
  },

  //TODO: Pull all of my past performance reviews and use those details
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Tannor Franks</h1>
        <p>Born in Merced, California</p>
        <p>Lives and works in Nashville, Tennessee</p>
      </section>
      <section>
        <header>
          <h1>Education</h1>
          <p>University of Tennessee at Martin</p>
        </header>
        <p>
          Bachelor of Science: Engineering With a Concentration In Electrical
        </p>
        <p>Minor: Japanese</p>
      </section>
      <section className={styles.jobDetails}>
        {jobDetails.map((job) => (
          <article key={job.name}>
            <header>
              <h1>{job.jobTitle}</h1>
              <p>{job.name}</p>
            </header>
            <div>
              <span>{job.location}</span>
              <span> &bull; </span>
              <span>{job.date}</span>
            </div>
            {job.details &&
              job.details.map((detail, i) => <p key={i}>{detail}</p>)}
          </article>
        ))}
      </section>
    </main>
  );
}
