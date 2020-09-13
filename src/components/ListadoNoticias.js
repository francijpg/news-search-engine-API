import React from "react";
import Noticia from "./Noticia";
import PropTypes from "prop-types";

const ListadoNoticias = ({ noticias }) => (
  <div className="row">
  {console.log(Array.isArray(noticias) && noticias.length)}
    {noticias.length === 0 || noticias === undefined ? (
      <p className="red darken-4 error white-text center">
        No se encontraron noticias
      </p>
    ) : (
      noticias.map((noticia) => <Noticia key={noticia.url} noticia={noticia} />)
    )}
  </div>
);

ListadoNoticias.propTypes = {
  noticias: PropTypes.array.isRequired,
};

export default ListadoNoticias;
