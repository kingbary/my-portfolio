import { useEffect, useRef } from "react";

import styles from "./projectSection.module.css";

function ScrollingImg({ width, image }) {
  const imgContainer = useRef(null);

  useEffect(() => {
    imgContainer.current?.style.setProperty("--width", width);

    const margin = Math.floor((width - 70) * (-48 / 30) + 48);
    imgContainer.current?.style.setProperty("--margin", margin);
  }, [width]);

  return (
    <div className={styles.img_container} ref={imgContainer}>
      <img
        width={"100%"}
        height={"100%"}
        src={image}
        alt=""
        className={styles.img}
      />
    </div>
  );
}

export default ScrollingImg;
