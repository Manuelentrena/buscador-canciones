import React, { useRef, useState } from "react";

const Formulario = ({ setSearch }) => {
  //Referencias a los inputs
  const songRef = useRef(null);
  const artistRef = useRef(null);

  //state del Error
  const [error, setError] = useState(false);

  //submit del Form
  const submitForm = (e) => {
    e.preventDefault();

    if (artistRef.current.value === "" || songRef.current.value === "") {
      setError(true);
      return;
    }
    setError(false);
    setSearch({
      [artistRef.current.name]: artistRef.current.value.split(" ").join("_"),
      [songRef.current.name]: songRef.current.value.split(" ").join("_"),
    });
  };

  //consultar las apis
  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={submitForm}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Buscador de Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      ref={artistRef}
                      placeholder="Nombre Artista"
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Nombre Canción"
                      ref={songRef}
                    ></input>
                  </div>
                </div>
              </div>
              {error ? (
                <p className="alert alert-danger text-center p-2">
                  Todos los campos son obligatorios
                </p>
              ) : null}
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
