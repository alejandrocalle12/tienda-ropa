// src/pages/Noticias.js
import React, { useEffect, useState } from 'react';
import './Noticias.css';

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      'https://newsdata.io/api/1/news?country=co&language=es&apikey=pub_6c858dcd46dc47f9a0ece70c0f1a9691'
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setNoticias(data.results.slice(0, 5)); // solo 5 noticias
        } else {
          setError('No se encontraron noticias.');
        }
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al cargar noticias:', error);
        setError('Error al cargar noticias. Intenta más tarde.');
        setCargando(false);
      });
  }, []);

  return (
    <div className="contenedor-noticias">
      <h2>📰 Últimas noticias de Colombia</h2>

      {cargando && (
        <div className="spinner"></div>
      )}

      {error && (
        <p className="mensaje-error">{error}</p>
      )}

      {!cargando && !error && (
        <div className="lista-noticias">
          {noticias.map((noticia, index) => (
            <div className="tarjeta-noticia" key={index}>
              {noticia.image_url && (
                <img
                  src={noticia.image_url}
                  alt={noticia.title}
                  className="imagen-noticia"
                />
              )}
              <h3>{noticia.title}</h3>
              <p>{noticia.description || 'Sin descripción disponible.'}</p>
              <a href={noticia.link} target="_blank" rel="noreferrer">
                Leer más
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Noticias;

