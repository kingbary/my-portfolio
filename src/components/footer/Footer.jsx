import { Link } from "react-router-dom";
import styles from "./footer.module.css";

import { linkedinIcon, emailIcon, twitterIcon } from "../../assets/icons";

function Footer() {
  const resumeLink =
    "https://drive.google.com/file/d/16wuTuGZWEfmfItKpoa1hEhVR84aYyT85/view?usp=drive_link";
  const emailLink = "kingsleyakwa@gmail.com";
  const linkedinLink = "https://www.linkedin.com/in/kingsleyakwa";
  const twitterLink = "https://twitter.com/kingsley_akwa";
  return (
    <footer className={`${styles.footer}`}>
      <div className={`flex container ${styles.footer_container}`}>
        <p>Let's work together to create amazing and impactful projects.</p>
        <div className={`flex ${styles.icon_container}`}>
          <Link to={`mailto:${emailLink}`} title="hello@kingsleyakwa.tech">
            <img src={emailIcon} alt="email-icon" />
          </Link>
          <Link to={linkedinLink} target="_blank" title="LinkedIn profile link">
            <img src={linkedinIcon} alt="linkedin-icon" />
          </Link>
          <Link to={twitterLink} target="_blank" title="Twitter profile link">
            <img src={twitterIcon} alt="twitter-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
