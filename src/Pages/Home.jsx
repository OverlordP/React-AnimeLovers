import React from "react";
import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

function Home() {
  const [animeRec, setanimeRec] = useState([]);

  const [searchAnime, setsearchAnime] = useState("");

  const [animes, setanimes] = useState([]);

  const getAnimeReco = async () => {
    const data = await fetch(
      "https://api.jikan.moe/v4/anime/1/recommendations"
    ).then((res) => res.json());
    const data2 = await data.data.slice(0, 15);
    setanimeRec(data2);
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    getAnimes(searchAnime);
  };
  const getAnimes = async (busqueda) => {
    try {
      const data = await fetch(
        `https://api.jikan.moe/v4/anime?q=${busqueda}&limit=9`
      ).then((res) => res.json());
      const animedata = await data.data;
      setanimes(animedata);
      return animedata;
    } catch (err) {
      alert("Hello! I am an alert box!!");
    }
  };

  useEffect(() => {
    getAnimeReco();
  }, []);

  return (
    <div className="App">
    
      <br />
      <div className="container ">
        <div className="row ">
          <Sidebar recomendaciones={animeRec} />
          <MainContent
            setSearch={setsearchAnime}
            getSearch={searchAnime}
            getAnimes={onsubmit}
            animes={animes}
          />
        </div>
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
