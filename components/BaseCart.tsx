import React from "react";
import styles from "../module/b10.module.css";
export default function BaseCart({ content, title, image, children }: any) {
  return (
    <div className={styles.cart}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p>{content}</p>
        {children}
      </div>
    </div>
  );
}
