import React from "react";
import styles from "../styles/Home.module.css";

import Image from "next/image";

export default function Testimonials() {
  return (
    <div className={styles.testimonialsGrid}>
      <div className={styles.testimonialsCard}>
        <p>
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas.”
        </p>
        <div className={styles.testimonialsLogo}>
          <Image
            src="/testimonials-logo1.svg"
            alt="amazon logo"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className={styles.testimonialsCard}>
        <p>
          “Provident similique accusantium nemo autem. Veritatis obcaecati
          tenetur.”
        </p>
        <div className={styles.testimonialsLogo}>
          <Image
            src="/testimonials-logo2.svg"
            alt="amazon logo"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div></div>

      <div className={styles.testimonialsCard}>
        <p>
          “Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum
          debitis quas aliquid.”
        </p>
        <div className={styles.testimonialsLogo}>
          <Image
            src="/testimonials-logo3.svg"
            alt="amazon logo"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className={styles.testimonialsCard}>
        <p>
          “Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
          sapiente officiis.”
        </p>

        <div className={styles.testimonialsLogo}>
          <Image
            src="/testimonials-logo5.svg"
            alt="amazon logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
