import { displayPic } from "../../assets/img";
import { arrowIcon } from "../../assets/icons";
import styles from "./heroSection.module.css"

function HeroSection() {
  return (
    <section className="pad-block-2">
      <div className={`flex container gap-15 ${styles.section_container}`}>
        <div>
          <div className={styles.img_container}>
            <img src={displayPic} alt="" />
          </div>
          <h3 className={styles.name}>Kingsley Akwa</h3>
        </div>
        <div className={`flex f-column ${styles.hero_content}`}>
          <p>
            Skilled and motivated Front-End Engineer with a strong focus on
            ReactJS. I'm passionate about creating dynamic and intruitive user
            interfaces.
          </p>
          <div className={`flex f-column ${styles.heading}`}>
            <h1>Front-End Engineer</h1>
            <p>Creating unique digital experiences</p>
          </div>
        </div>
      </div>
          <div className={`flex f-column ${styles.scroll_arrow}`}>
            <img src={arrowIcon} alt="" />
            <p>scroll</p>
          </div>
    </section>
  );
}

export default HeroSection;
