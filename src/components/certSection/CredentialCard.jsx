import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { arrowHeadDown, arrowHeadUp, linkArrow } from "../../assets/icons";
import { certCredentials } from "../../data/credentialData";
import styles from "./certSection.module.css";

function CredentialCard() {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className={`flex ${styles.cred_container}`}>
      {certCredentials.map((certCred, idx) => {
        if (!viewMore && idx > 3) return;
        return (
          <div className={`flex ${styles.credential_card}`}>
            <div className={`flex ${styles.sub_credential}`}>
              <img
                src={certCred.org_logo}
                alt=""
                width={"70px"}
                className={styles.org_logo}
              />
              <div className="ml-h">
                <h3 className={styles.cert_heading}>{certCred.name}</h3>
                <p className={styles.issue_org}>{certCred.iss_org}</p>
              </div>
            </div>
            <div className={styles.cert_id}>
              <p>Credential ID: {certCred.credential_id}</p>
              <Link
                className={`flex ${styles.cred_link}`}
                to={certCred.cred_link}
                target="_blank"
              >
                See Credential
                <img src={linkArrow} width={"20px"} />
              </Link>
            </div>
          </div>
        );
      })}
      <div className={styles.btn_container}>
        <button
          className={`flex mt-1 btn ${styles.cred_link}`}
          onClick={() => setViewMore((prev) => !prev)}
        >
          {viewMore ? "See Less" : "See More"}
          <img
            src={viewMore ? arrowHeadUp : arrowHeadDown}
            width={"20px"}
            height={"20px"}
          />
        </button>
      </div>
    </div>
  );
}

export default CredentialCard;
