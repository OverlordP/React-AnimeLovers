import React from "react";
import { useNavigate } from "react-router-dom";

function NoFound() {
    const navigate = useNavigate()
    const onclik = ()=>{
        navigate(-1)
    }


  return (
    <div className="container">
        <div>      <h2>
        No Found error <strong>404</strong>
      </h2></div>

      <button className="btn btn-primary" onClick={onclik}>Regresar</button>
    </div>
  );
}

export default NoFound;
