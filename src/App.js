import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Song from "./components/Song";
import Info from "./components/Info";

function App() {
  //State del form
  const [search, setSearch] = useState({});
  //State de la letra
  const [lyric, setLyric] = useState("");
  //State de la Info
  const [info, setInfo] = useState({});

  //state

  //Consultar API
  useEffect(() => {
    if (Object.keys(search).length === 0) return;
    const consultarApiLetra = async () => {
      const { artist, song } = search;

      const urls = [
        `https://api.lyrics.ovh/v1/${artist}/${song}`,
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`,
      ];

      const [dataLyric, dataInfo] = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
      );

      dataLyric?.lyrics
        ? setLyric(dataLyric.lyrics)
        : setLyric("No se ha encontrado la canción");

      dataInfo?.artists
        ? setInfo(dataInfo.artists[0])
        : setInfo({ strArtist: "Artista No encontrado" });
    };
    consultarApiLetra();
  }, [search]);

  return (
    <>
      <Formulario setSearch={setSearch} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Song lyric={lyric} search={search} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
