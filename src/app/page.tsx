"use client";
import React from "react";
import styles from "./page.module.css";
// import ResumePDF from "@/app/resume";
// import { PDFViewer } from "@react-pdf/renderer";

const jobDetails = [
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
      "Made significant contributions in rebuilding a platform for 60k+ homebuilders leading to a 100% increase in performance",
      "Created a shared config utility to help ",
    ],
  },
  {
    name: "Optum",
    jobTitle: "Software Engineer II",
    date: "August 2022 - Feb 2021",
    location: "Nashville, TN",
    details: [
      "Developed enhancements and features for a full-stack web application for auditing health insurance claims",
      "Created unit tests and end-to-end tests to ensure code quality",
      "Use automated tools to deploy code in various environments",
    ],
  },
  {
    name: "Core10",
    jobTitle: "Software Engineer II",
    date: "July 2018 - August 2018",
    location: "Martin, TN",
    details: [
      "Define, develop, and implement critical code changes, focusing on performance optimization.",
      "Create and execute comprehensive unit and integration tests using frameworks such as Karma and NUnit.",
      "Conduct initial triage of production issues, manage capacity, and efficiently distribute work items.",
      "Collaborate closely with client stakeholders to deliver optimal solutions.",
      "Oversee the identification, triage, and resolution of mission-critical production code issues for a major financial service provider.",
      "Develop front-end and back-end code in Swift and Python3 for a subscription-tracking iOS application.",
      "Design and implement a sophisticated string-matching algorithm using n-gram cosine comparison to enhance record matching in a subscription database.",
      "Expand and enhance API functionality by developing new endpoints and updating existing ones.",
      "Containerize application code using Docker and deploy it on EC2 instances, ensuring smooth deployment of subsequent versions.",
      "Manage front-end code deployment efficiently using Fastlane and Apple developer tools.",
    ],
  },
  {
    name: "ERMCO",
    jobTitle: "Associate Design Engineer",
    date: "May 2017 - May 2018",
    location: "Dyersburg, TN",
    details: [],
  },
  //TODO: Pull all of my past performance reviews and use those details
];

export default function Home() {
  // const [showPdf, setShowPdf] = useState(false);

  return (
    <main className={styles.main}>
      <section className={styles.detailSection}>
        <h1>Tannor Franks</h1>
        <p>Born in Merced, California</p>
        <p>Lives and works in Nashville, Tennessee</p>
      </section>
      <section className={styles.detailSection}>
        <header>
          <h1>Education</h1>
          <p>University of Tennessee at Martin</p>
        </header>
        <p>
          Bachelor of Science: Engineering With a Concentration In Electrical
        </p>
        <p>Minor: Japanese</p>
      </section>
      <section className={styles.detailSection__jobs}>
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
      {/*<button onClick={() => setShowPdf(true)}>Show Resume</button>*/}
      {/*{showPdf && (*/}
      {/*  <div*/}
      {/*    style={{*/}
      {/*      position: "absolute",*/}
      {/*      top: 0,*/}
      {/*      left: 0,*/}
      {/*      height: "100vh",*/}
      {/*      width: "100vw",*/}
      {/*      background: "gray",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <button onClick={() => setShowPdf(false)}>Close</button>*/}
      {/*    <PDFViewer width="100%" height="100%">*/}
      {/*      <ResumePDF />*/}
      {/*    </PDFViewer>*/}
      {/*  </div>*/}
      {/*)}*/}
    </main>
  );
}
