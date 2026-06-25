import React from 'react';
import PropTypes from 'prop-types';

const FiltroEspecie = ({ especies, filtroActual, onFiltrar }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <button
        onClick={() => onFiltrar('')}
        style={{
          margin: '0 10px',
          padding: '10px 20px',
          backgroundColor: filtroActual === '' ? '#007bff' : '#ddd',
          color: filtroActual === '' ? 'white' : 'black',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Todas
      </button>
      {especies.map((especie) => (
        <button
          key={especie}
          onClick={() => onFiltrar(especie)}
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            backgroundColor: filtroActual === especie ? '#007bff' : '#ddd',
            color: filtroActual === especie ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {especie}
        </button>
      ))}
    </div>
  );
};

FiltroEspecie.propTypes = {
  especies: PropTypes.arrayOf(PropTypes.string).isRequired,
  filtroActual: PropTypes.string.isRequired,
  onFiltrar: PropTypes.func.isRequired,
};

export default FiltroEspecie;