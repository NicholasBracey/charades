import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { FaMusic } from 'react-icons/fa';
import { ImVideoCamera } from "react-icons/im";
import { BsDisplay, BsBook } from "react-icons/bs";

import Card from './components/card/Card';

// api GET calls + .env api keys
const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_KEY;
const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIE_API_KEY}`;
const TV_API_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${MOVIE_API_KEY}`;

const BOOK_API_KEY = process.env.REACT_APP_BOOK_KEY;
const BOOK_API_URL = `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=${BOOK_API_KEY}`;

const MUSIC_API_KEY = process.env.REACT_APP_MUSIC_KEY;
const MUSIC_API_URL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${MUSIC_API_KEY}&format=json`;


const App = () => {
  //setState
  const [movieTitle, setMovieTitle] = useState('');
  const [tvTitle, setTvTitle] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [musicInfo, setMusicInfo] = useState({title:'', artist:''});

  // get a random book/movie from a object of 20 results
  const randomNumber = Math.floor(Math.random() * 15) + 0;

  const fetchData = () => {
    // axios api calls
    const getMovieApi = axios.get(MOVIE_API_URL);
    const getTvApi = axios.get(TV_API_URL);
    const getBookApi = axios.get(BOOK_API_URL);
    const getMusicApi = axios.get(MUSIC_API_URL);

    // spread data + drill into object for relevent info
    axios.all([getMovieApi, getTvApi, getBookApi, getMusicApi]).then(
      axios.spread((...allData) => {
        const allMovieData = allData[0].data.results[randomNumber].title;
        const allTvData = allData[1].data.results[randomNumber].name;
        const allBookData = allData[2].data.results.books[randomNumber].title;
        const allMusicData = {track: allData[3].data.tracks.track[randomNumber].name, artist: allData[3].data.tracks.track[randomNumber].artist.name};

        setMovieTitle(allMovieData);
        setTvTitle(allTvData)
        setBookTitle(allBookData);
        setMusicInfo(allMusicData)
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div><FaMusic /> {musicInfo.track} - {musicInfo.artist}</div>
      <div><ImVideoCamera /> {movieTitle}</div>
      <div><BsDisplay /> {tvTitle}</div>
      <div><BsBook /> {bookTitle}</div>

      <Card />
    </div>
  );
};

export default App;
