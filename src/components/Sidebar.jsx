import React from "react";

function Sidebar({ recomendaciones }) {

    const redirec = (e,anime)=>{
        console.log(e.target.children[0].innerHTML)
        window.open(e.target.children[0].innerHTML, "_blank")}
       // window.location.href=e.target.children[0].innerHTML}
  return (
    <div className="col-md-4 col-4">
      <h5>Top animes</h5>

      <div className="row">
        <ul className="list-group">
          {recomendaciones.map((anime) => {
            return (
              <div key={anime.entry.title} onClick={(e)=>{redirec(e)}} >
                <li className="list-group-item d-flex justify-content-between align-items-center">
                {anime.entry.title} 
                <div hidden>{anime.entry.url} </div>
                  <span className="badge bg-primary rounded-pill">{anime.votes} </span>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
