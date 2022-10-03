//import {useState, useEffect,useRef} from 'react'
import React from "react";
//import Bookmarks from './components/Bookmarks'
import { getData } from "../api";
const Bookmarks = (props) => {
  const [bookmarks, setBookmarks] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const second = async () => {
      try {
        const { totalPages, bookmarks } = await getData();
        console.log(bookmarks);
        setBookmarks(bookmarks);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    second();
    return () => {
      //   second;
    };
  }, []);

  return (
    <>
      <p className="animate-bounce bg-indigo-700">
        Checking Bookmarks Component Working{" "}
      </p>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {bookmarks.map((bookmark) => (
        <div key={bookmark._id}>
          <p>{bookmark.title}</p>
          <p>{bookmark.url}</p>
        </div>
      ))}
    </>
  );
};

export default React.memo(Bookmarks);
