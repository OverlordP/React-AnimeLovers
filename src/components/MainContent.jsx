import React from "react";

function MainContent({ setSearch, getSearch, getAnimes, animes }) {
  return (
    <div className="col-md-8 col-8">
      <form onSubmit={getAnimes}>
        <div className="row m-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Busque su anime preferido"
              value={getSearch}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>

      <div className="row p-4">
        {animes.map((e) => {
          return (
            <div className="col-md-6 col-lg-4 col-sm-12 mb-3" key={e.title}>
              <div className="card">
                <div className="card-header ">
                  <h6 className="card-subtitle text-muted text-center">
                    {e.title}
                  </h6>
                </div>
                <div className="overflow1">
                  <img
                    className="card-img-top"
                    src={e.images.jpg.large_image_url}
                    alt="Cardimag"
                  />
                </div>

                <div className="card-body">
                  <p className="card-text">
                    {e.synopsis != null
                      ? e.synopsis.substring(0, 48) + "...."
                      : "no description...."}
                  </p>
                </div>
                <div className="card-footer text-muted text-center">
                  Episodes: {e.episodes}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainContent;
