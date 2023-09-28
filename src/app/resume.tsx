import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define your resume data
const resumeData = {
  name: "John Doe",
  phone: "123-456-7890",
  email: "johndoe@example.com",
  summary: "Dedicated software engineer with 5 years of experience...",
  // Add other sections and data here
};

// Create a React PDF component
const ResumePDF = () => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.name}</Text>
          <Text style={styles.contact}>
            {resumeData.phone} | {resumeData.email}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>{resumeData.summary}</Text>
        </View>
        {/* Add other sections (Skills, Work Experience, Education, etc.) */}
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contact: {
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  summary: {
    fontSize: 12,
  },
});

export default ResumePDF;
