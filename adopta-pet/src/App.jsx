import React from 'react';
import ListaMascotas from './components/Lista Mascotas';

const App = () => {
  const mascotas = [
    {
      id: 1,
      nombre: 'Firulais',
      imagen: 'https://via.placeholder.com/300',
      descripcion: 'Un perro muy amigable y juguetón.',
      especie: 'Perro',
    },
    {
      id: 2,
      nombre: 'Michi',
      imagen: 'https://via.placeholder.com/300',
      descripcion: 'Un gato curioso y tranquilo.',
      especie: 'Gato',
    },
    {
      id: 3,
      nombre: 'Piolín',
      imagen: 'https://via.placeholder.com/300',
      descripcion: 'Un ave alegre y colorida.',
      especie: 'Ave',
    },
  ];

  const handleAdoptar = (nombre) => {
    alert(`¡Gracias por adoptar a ${nombre}!`);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Adopta una Mascota</h1>
      <ListaMascotas mascotas={mascotas} onAdoptar={handleAdoptar} />
    </div>
  );
};

export default App;