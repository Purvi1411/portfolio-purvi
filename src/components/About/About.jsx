import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
                B.Tech in Computer Science and Engineering
                S.R.M. Institute of Science and Technology, Chennai
                CGPA: 9.53 (Current) Year of Graduation : 2027
                
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
                Class XII (CBSE)
                Kendriya Vidyalaya I.N.S. Dronacharya
                Percentage: 78.8%
                Year of Completion: [2023]
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
                Class X (CBSE)
                Kendriya Vidyalaya I.N.S. Dronacharya
                Percentage: 93.8%
                Year of Completion: [2021]
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
