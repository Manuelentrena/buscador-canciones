import React from "react";

const Song = ({ lyric, search }) => {
  if (lyric === "") return null;
  return (
    <>
      <h2>
        {lyric !== "No se ha encontrado la canción"
          ? search.song.split("_").join(" ").toUpperCase()
          : "CANCIÓN NO ENCONTRADA"}
      </h2>
      <p className="letra">{lyric}</p>
    </>
  );
};

export default Song;
