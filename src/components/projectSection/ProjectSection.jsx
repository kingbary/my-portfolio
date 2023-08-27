import { useRef, useEffect, useState } from "react";

// Multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./projectSection.module.css";
import ScrollingImg from "./ScrollingImg";
import ButtonGroup from "./ButtonGroup";

import { img_1, img_2 } from "../../assets/img";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const projects = [
  { img: img_1, text: "" },
  { img: img_2, text: "" },
  { img: img_1, text: "" },
  { img: img_2, text: "" },
];

function ProjectSection() {
  const sectionRef = useRef(null);
  const [width, setWidth] = useState(70);

  const vw = useRef(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  function scaleUp(value) {
    return Math.ceil(100 + 0.75 * (120 - value));
  }

  function scaleDown(value) {
    if (value > 100 && value < 120) return 100;
    return Math.ceil(100 - 0.75 * (100 - value));
  }

  function prevSlide() {
    setCurrentSlide((prev) => --prev);
  }

  function nextSlide() {
    setCurrentSlide((prev) => ++prev);
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
    vw.current = window.innerWidth;
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const correction = (projects.length - 1) * currentSlide * vw.current;
  const isFullview = width === 100;

  return (
    <section ref={sectionRef} className={`${styles.project_section}`}>
      <h2 className="section-title">SELECTED WORKS</h2>
      <Carousel
        arrows={false}
        customButtonGroup={
          isFullview ? (
            <ButtonGroup prevSlide={prevSlide} nextSlide={nextSlide} />
          ) : null
        }
        partialVisible={false}
        responsive={responsive}
        containerClass={`${isFullview ? styles.fullview : ""}`}
        itemClass={styles.auto_width}
        additionalTransfrom={isFullview ? correction : 0}
        keyBoardControl={true}
        autoPlay={false}
        // draggable={false}
        // transitionDuration={0}
      >
        {projects.map((project, idx) => (
          <ScrollingImg key={idx} width={width} image={project.img} />
        ))}
      </Carousel>
    </section>
  );
}

export default ProjectSection;
