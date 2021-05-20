import React from "react";
import styles from "./card.module.css";
import { FaMusic } from "react-icons/fa";
import { ImVideoCamera } from "react-icons/im";
import { BsDisplay, BsBook } from "react-icons/bs";

export const Card = ({ track, artist, movie, tv, book }) => {
  return (
    <div className={styles.card}>
      <div><FaMusic /> : {track} - {artist}</div>
      <div><ImVideoCamera /> : {movie}</div>
      <div><BsDisplay /> : {tv}</div>
      <div><BsBook /> : {book}</div>
    </div>
  );
};

export default Card;
