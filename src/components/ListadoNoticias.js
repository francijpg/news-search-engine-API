import React from "react";
import Noticia from "./Noticia";
import PropTypes from "prop-types";

const ListadoNoticias = ({ noticias }) => (
  <div className="row">
    {console.log(noticias)}
    {Array.isArray(noticias) ? (
      noticias.map((noticia) => <Noticia key={noticia.url} noticia={noticia} />)
    ) : (
      <p className="red darken-4 error white-text center">
        No se encontraron noticias
      </p>
    )}
  </div>
);

ListadoNoticias.propTypes = {
  noticias: PropTypes.array.isRequired,
};

export default ListadoNoticias;
