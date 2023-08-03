import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

import Svg from "../reuseable/Svg";
import {
  logoIcon,
  linkedinIcon,
  emailIcon,
  twitterIcon,
} from "../../assets/icons";

function Navigation() {
  const resumeLink =
    "https://drive.google.com/file/d/16wuTuGZWEfmfItKpoa1hEhVR84aYyT85/view?usp=drive_link";
  const emailLink = "kingsleyakwa@gmail.com";
  const linkedinLink = "https://www.linkedin.com/in/kingsleyakwa";
  const twitterLink = "https://twitter.com/kingsley_akwa";
  return (
    <nav className={styles.nav}>
      <div className={`flex container ${styles.nav_container}`}>
        <img
          src={logoIcon}
          alt="Kingsley Akwa's Logo"
          className={styles.logoIcon}
        />

        <Link
          to={resumeLink}
          className="t-large"
          target="_blank"
          title="View my Resume"
        >
          My Resume
        </Link>
      </div>
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
    </nav>
  );
}

export default Navigation;
