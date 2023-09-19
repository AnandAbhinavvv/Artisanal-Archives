import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>|©2023 Developed by Abhinav|</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Abhinav Facebook" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Abhinav Instagram" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Abhinav Twitter" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Abhinav Youtube" />
      </div>
    </div>
  );
};

export default Footer;
