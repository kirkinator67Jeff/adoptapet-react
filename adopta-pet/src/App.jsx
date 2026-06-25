import React, { useState } from 'react';
import ListaMascotas from './components/Lista Mascotas';
import FiltroEspecie from './components/FiltroEspecie';

const App = () => {
  const [filtroEspecie, setFiltroEspecie] = useState('');

  const mascotas = [
    {
      id: 1,
      nombre: 'Firulais',
      imagen: 'https://via.placeholder.com/300',
      descripcion: 'Un perro muy amigable y juguetón.',
      especie: 'Perro',
      adopcionUrgente: true,
    },
    {
      id: 2,
      nombre: 'Michi',
      imagen: 'https://via.placeholder.com/300',
      descripcion: 'Un gato curioso y tranquilo.',
      especie: 'Gato',
      adopcionUrgente: false,
    },
    {
      id: 3,
      nombre: 'Piolín',
      imagen: 'https://via.placeholder.com/300',
      descripcion: 'Un ave alegre y colorida.',
      especie: 'Ave',
      adopcionUrgente: true,
    },
  ];

  const handleAdoptar = (nombre) => {
    alert(`¡Gracias por adoptar a ${nombre}!`);
  };

  // Filtrar las mascotas según la especie seleccionada
  const mascotasFiltradas = filtroEspecie
    ? mascotas.filter((mascota) => mascota.especie === filtroEspecie)
    : mascotas;

  // Contar las mascotas con adopción urgente
  const contadorUrgente = mascotasFiltradas.filter(
    (mascota) => mascota.adopcionUrgente
  ).length;

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Adopta una Mascota</h1>
      <FiltroEspecie
        especies={['Perro', 'Gato', 'Ave']}
        filtroActual={filtroEspecie}
        onFiltrar={setFiltroEspecie}
      />
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#ff0000' }}>
        {contadorUrgente > 0
          ? `Hay ${contadorUrgente} mascota(s) que necesitan adopción urgente.`
          : 'No hay mascotas con adopción urgente.'}
      </p>
      {mascotasFiltradas.length > 0 ? (
        <ListaMascotas mascotas={mascotasFiltradas} onAdoptar={handleAdoptar} />
      ) : (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#555' }}>
          No hay mascotas que coincidan con el filtro seleccionado.
        </p>
      )}
    </div>
  );
};

export default App;