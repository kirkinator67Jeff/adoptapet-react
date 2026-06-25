import React from 'react';
import PropTypes from 'prop-types';
import MascotaCard from './MascotaCard';

const ListaMascotas = ({ mascotas, onAdoptar }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {mascotas.map((mascota) => (
        <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          imagen={mascota.imagen}
          descripcion={mascota.descripcion}
          especie={mascota.especie}
          adopcionUrgente={mascota.adopcionUrgente}
          onAdoptar={() => onAdoptar(mascota.nombre)}
        />
      ))}
    </div>
  );
};

ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      imagen: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      especie: PropTypes.string.isRequired,
      adopcionUrgente: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onAdoptar: PropTypes.func.isRequired,
};

export default ListaMascotas;