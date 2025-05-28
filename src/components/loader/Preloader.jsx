
// components/Preloader.js

import Image from "next/image";
import styles from "./Loader.module.css"; // Import CSS module

const Preloader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Image
        src="/mrgif.gif" // Replace with your actual GIF URL
        alt="Loading..."
        className={styles.loader}
        width={150}
        height={150}
        unoptimized
      />
    </div>
  );
};

export default Preloader;
