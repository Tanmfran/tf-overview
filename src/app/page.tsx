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
      "Acted as the Technical Lead for a team of 5 engineers, overseeing the complete rewrite of a legacy application using modern technologies such as React and GraphQL.",
      "Successfully managed the migration of over 130,000 user accounts from the legacy system to the new platform, ensuring data integrity and minimal disruption.",
      "Achieved a remarkable latency improvement of over 100% on the new platform by strategically breaking up large API calls into smaller, more efficient ones, preloading tab data for faster access, and implementing Redis caching for user information.",
      "Pioneered the integration of GraphQL into the company's technical ecosystem, playing a pivotal role in making GraphQL the standard API template.",
      "Made significant contributions to reference architecture, authored comprehensive how-to documentation, and crafted effective onboarding materials. Delivered informative talks during new hire onboarding sessions.",
      "Led the interview process for various positions, conducting interviews for over a dozen candidates, spanning from junior to staff-level roles, ensuring a high-quality talent acquisition process.",
      "Designed and maintained a set of shared Node.js modules and utilities utilized across API and UI repositories, promoting code consistency and efficiency.",
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
  {
    name: "University of Tennessee at Martin",
    jobTitle: "Senior Design Project",
    date: "Fall 2017 - Spring 2018",
    location: "Martin, TN",
    details: [
      "Led a team of four members in the design, fabrication, and testing of a robot for specific tasks.",
      "Managed the project budget, including researching, planning, and purchasing parts.",
      "Created 3D schematics for the robot's design.",
      "Utilized the schematics to laser cut the robot's acrylic frame and designed milled aluminum brackets to securely hold the wheels.",
      "Developed the majority of the robot's autonomous functions using the Arduino IDE.",
      "Implemented and fine-tuned a PID controller to enable the robot to maintain a set distance from a wall, utilizing data from ultrasound sensors.",
      "Effectively delegated tasks to team members and ensured the overall project's success.",
    ],
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
        <header className={styles.detailSection__header}>
          <h1>EXPERIENCE</h1>
        </header>
        <div className={styles.detailSection__experience}>
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
        </div>
      </section>
      <section className={styles.detailSection}>
        <header className={styles.detailSection__header}>
          <h1>EDUCATION</h1>
        </header>
        <p>University of Tennessee at Martin</p>
        <p>
          Bachelor of Science: Engineering With a Concentration In Electrical
        </p>
        <p>Minor: Japanese</p>
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
