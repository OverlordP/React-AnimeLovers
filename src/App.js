import HeaderAnime from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [animeRec, setanimeRec] = useState([])

  const [searchAnime, setsearchAnime] = useState("")

  const [animes, setanimes] = useState([])

  const getAnimeReco = async ()=>{

    const data = await fetch("https://api.jikan.moe/v4/anime/1/recommendations").then(res => res.json())
    const data2 = await data.data.slice(0,15)
    setanimeRec(data2)

  }
const onsubmit =async (e)=>{
  e.preventDefault()
  getAnimes(searchAnime)
 
}

  const getAnimes = async (busqueda)=>{
    try{
      const data = await fetch(`https://api.jikan.moe/v4/anime?q=${busqueda}&limit=6`).then(res=>res.json())
      const animedata  = await data.data
      setanimes(animedata)
      return animedata
    }
    catch(err){
      alert("Hello! I am an alert box!!");
    }

  }
  
	useEffect(() => {
		getAnimeReco();
	}, []);

  return (
    <div className="App">
      <Navbar/>
      <HeaderAnime />
      <div className="container ">
        <div className="row ">
          <Sidebar recomendaciones={animeRec} />
          <MainContent setSearch={setsearchAnime} getSearch={searchAnime} getAnimes={onsubmit} animes={animes}/>
        </div>
      </div>
    </div>
  );
}

export default App;
