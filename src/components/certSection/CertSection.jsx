import React from "react";
import { Link } from "react-router-dom";

import styles from "./certSection.module.css";

import CredentialCard from "./CredentialCard";

function CertSection() {
  return (
    <section className="container">
      <h2 className="section-title">CERTIFICATIONS</h2>
      <CredentialCard />
    </section>
  );
}

export default CertSection;
