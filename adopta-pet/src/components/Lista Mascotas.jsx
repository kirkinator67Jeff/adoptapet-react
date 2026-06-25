import React from 'react';
import MascotaCard from './components/MascotaCard';

const App = () => {
  const handleAdoptar = (nombre) => {
    alert(`¡Gracias por adoptar a ${nombre}!`);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <MascotaCard
        nombre="Firulais"
        imagen="https://via.placeholder.com/300"
        descripcion="Un perro muy amigable y juguetón."
        especie="Perro"
        onAdoptar={() => handleAdoptar('Firulais')}
      />
      <MascotaCard
        nombre="Michi"
        imagen="https://via.placeholder.com/300"
        descripcion="Un gato curioso y tranquilo."
        especie="Gato"
        onAdoptar={() => handleAdoptar('Michi')}
      />
      <MascotaCard
        nombre="Piolín"
        imagen="https://via.placeholder.com/300"
        descripcion="Un ave alegre y colorida."
        especie="Ave"
        onAdoptar={() => handleAdoptar('Piolín')}
      />
    </div>
  );
};

export default App;