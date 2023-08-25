import styles from "./ProjectSection.module.css";
import { arrowHeadLeft, arrowHeadRight } from "../../assets/icons";

function ButtonGroup({ next, previous, nextSlide, prevSlide, ...rest }) {
  const {
    carouselState: { currentSlide, totalItems },
  } = rest;

  return (
    <div className={styles.button_group}>
      <button
        className={`${styles.arrowBtnIcon} ${
          currentSlide === 0 ? styles.disable : ""
        }`}
        onClick={() => {
          previous();
          prevSlide();
        }}
      >
        <img src={arrowHeadLeft} alt="" />
      </button>
      <button
        className={`${styles.arrowBtnIcon} ${
          currentSlide === totalItems - 1 ? styles.disable : ""
        }`}
        onClick={() => {
          next();
          nextSlide();
        }}
      >
        <img src={arrowHeadRight} alt="" />
      </button>
    </div>
  );
}

export default ButtonGroup;
