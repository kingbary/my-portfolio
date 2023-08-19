import { useRef, useEffect, useState } from "react";

import styles from "./projectSection.module.css";
import ScrollingImg from "./ScrollingImg";
import { img_1, img_2 } from "../../assets/img";

function ProjectSection() {
  const sectionRef = useRef(null);
  const [width, setWidth] = useState(70);

  function scaleUp(value) {
    return Math.ceil(100 + 0.75 * (120 - value));
  }

  function scaleDown(value) {
    if (value > 100 && value < 120) return 100;
    return Math.ceil(100 - 0.75 * (100 - value));
  }

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const { bottom } = sectionRef.current?.getBoundingClientRect();
    const percentBottom = (bottom / windowHeight) * 100;
    setWidth(
      percentBottom >= 120 ? scaleUp(percentBottom) : scaleDown(percentBottom)
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.project_section}>
      <h2 className={styles.section_title}>SELECTED WORKS</h2>
      <div
        className={`${styles.img_slider} ${
          width === 100 ? styles.fullview : ""
        }`}
      >
        <ScrollingImg width={width} image={img_1} />
        <ScrollingImg width={width} image={img_2} />
      </div>
    </section>
  );
}

export default ProjectSection;
