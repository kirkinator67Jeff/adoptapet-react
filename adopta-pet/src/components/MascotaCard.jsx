import React from 'react';
import PropTypes from 'prop-types';
import './MascotaCard.css'; // Archivo CSS para estilos

const MascotaCard = ({ nombre, imagen, descripcion, onAdoptar }) => {
  return (
    <div className="mascota-card">
      <img src={imagen} alt={`Foto de ${nombre}`} className="mascota-card__imagen" />
      <div className="mascota-card__contenido">
        <h3 className="mascota-card__nombre">{nombre}</h3>
        <p className="mascota-card__descripcion">{descripcion}</p>
        <button className="mascota-card__boton" onClick={onAdoptar}>
          Adoptar
        </button>
      </div>
    </div>
  );
};

MascotaCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  onAdoptar: PropTypes.func.isRequired,
};

export default MascotaCard;