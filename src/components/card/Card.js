import React from "react";
import styles from "./card.module.css";
import { FaMusic } from "react-icons/fa";
import { ImVideoCamera } from "react-icons/im";
import { BsDisplay, BsBook } from "react-icons/bs";

export const Card = ({ track, artist, movie, tv, book }) => {
  // button for new card (refresh page)
  const newCard = () => {
    window.location.reload();
  };
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.card_item}>
          <div className={styles.card_icon}>
            <FaMusic size={50} />
          </div>
          <p>
            {track} <br />- {artist}
          </p>
        </div>
        <div className={styles.card_item}>
          <div className={styles.card_icon}>
            <ImVideoCamera size={50} />
          </div>
          <p>{movie}</p>
        </div>
        <div className={styles.card_item}>
          <div className={styles.card_icon}>
            <BsDisplay size={50} />
          </div>
          <p>{tv}</p>
        </div>
        <div className={styles.card_item}>
          <div className={styles.card_icon}>
            <BsBook size={50} />
          </div>
          <p>{book}</p>
        </div>
        <button onClick={newCard} className={`${styles.card_btn} ${styles.btn_color}`}>New card</button>
      </div>
      
    </div>
  );
};

export default Card;
