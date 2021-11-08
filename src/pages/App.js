import React, { useEffect, useState } from "react";
import '../globals.scss';
import axios from "axios";
import data from './data.json';

const App = () => {


  const [animes, setAnimes] = useState([]);

  const [mode, setMode] = useState('online');

  useEffect(() => {
    async function fetchMyAPI() {
      let url = "https://api.jikan.moe/v3"
      axios.get(url + "/top/anime/1/upcoming")
        .then((response) => {
          setAnimes(response.data.top)
          localStorage.setItem("animes", JSON.stringify(response.data.top))
        }).catch(err => {
          setMode('offline')
          setAnimes(data.catalog)
        })
      /* await fetch(url + "/top/anime/1/upcoming", myInit).then((response) => {
         console.log(response.json())
         setAnimes(response.data.top)
         localStorage.setItem("animes", JSON.stringify(response.data.top))
       }).catch(err => {
         setMode('offline')
         setAnimes(catalog)
       })*/
    }

    fetchMyAPI()
  }, [])

  

  return (
    <div className="container">
      {mode === 'offline' ? <div class="alert alert-warning">
        Você está no modo offline
      </div> : ''
      }
      <div className="row" id="offline">
        {animes.map((anime) => {
          return (
            <>
              <div className="col-lg-3 col-md-4 col-6 mb-3">
                <div className="card">
                  <div className="info">
                    <span># {anime.rank} - {anime.title}</span>
                  </div>
                  <img
                    src={anime.image_url}
                    alt={anime.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <div className="d-grid gap-2">
                      <a href={anime.url} className="btn btn-info btn-link" target="_blank" rel="noreferrer" >Visualizar no MAL</a>
                    </div>
                  </div>
                </div>
              </div>
            </>)
        })}
      </div>


    </div>

  )
}

export default App;
