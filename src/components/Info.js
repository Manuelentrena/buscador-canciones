import React from "react";

const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null;

  const {
    strArtist,
    strGenre,
    strWebsite,
    strBiographyES,
    strBiographyEN,
    strArtistThumb,
  } = info;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion Artista
      </div>
      <div className="card-body">
        <a
          className=""
          href={strWebsite !== "" ? `https://${strWebsite}` : null}
          target="_blank"
          rel="noopener noreferrer"
        >
          {strArtist}
        </a>
        <p className="card-text">Género: {strGenre}</p>
        <img src={strArtistThumb} alt="Logo Artista"></img>
      </div>
      <h2 className="card-text m-4">Biografía:</h2>
      <p className="card-text m-4">
        {strBiographyES ? strBiographyES : strBiographyEN}
      </p>
      <div className="card-body">
        <a
          href={`https://${info.strFacebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href={`https://${info.strTwitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href={`${info.strLastFMChart}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-lastfm"></i>
        </a>
      </div>
    </div>
  );
};

export default Info;
