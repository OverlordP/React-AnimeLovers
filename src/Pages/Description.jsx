import React from "react";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom"

function Description(){

    const id = useParams()
 
    const [animes, setanimes] = useState("")
    const [title, settitle] = useState("")

   const  getanime = async ()=>{

        const data = await fetch(`https://api.jikan.moe/v4/anime/${id.id}`).then(res=>res.json())
        settitle(data.data.title)
        setanimes(data.data.url)

    }

    useEffect(() => {
        getanime();
      });
    


    return(      <div> <h2>{title}</h2> <p>{animes }</p> </div>  
     )
    
}

export default Description