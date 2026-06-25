Elemento de React                     
Componente
JSX
Props
Estado (useState)
Renderizado de listas (.map + key)
Renderizado condicional

Donde lo usas en este problema?
1- Se utiliza para dividir la aplicación en partes reutilizables
2- Se usa para definir la estructura visual de los componentes, como las tarjetas de mascotas y los botones de filtro.
3- Se utilizan para pasar datos a los componentes, como el nombre, imagen, descripción y especie de cada mascota.
4- Se usa para manejar el filtro de especies y actualizar la lista de mascotas mostradas.
5- Se utiliza en ListaMascotas para recorrer el array de mascotas y renderizar un componente para cada una.
6-  Se usa para mostrar un mensaje cuando no hay mascotas que coincidan con el filtro o para resaltar las mascotas con adopción urgente.

Por que es el adecuado?
1- Permite dividir la logica y la interfaz en partes pequeñas y reutilizables
2- Hace que la definicion de la interfaz sea mas intuitiva y cercana al HTML pero con la potencia de js
3- Permite que los componentes sean reutilizables y dinamicos al recibir datos especificos
4- Permite manejar datos dinamicos que cambian segun la interaccion del usuario
5- Facilita la creacion de multiples elementos visuales a partir de un array
6- Mejora la experiencia del usuario al mostrar contenido dinamico

que ventaja tiene dividir el directorio en componentes en lugar de escribir todo en un solo archivo?
R: al dividir el directorio en componentes permite reutilizar codigo en diferentes partes de la aplicacion, facilita el mantenimiento al trabajar con archivos mas pequeños y especificos, mejora la legibilidad y organizacion del proyecto y permite que varios desarrolladores trabajen en diferentes componentes sin conflictos.

Que diferencia hay entre props y estado en tu solucion? Da un ejemplo concreto de cada uno tomado de esta aplicacion
R: la diferencia entre props y estado seria que los props son datos que se pasan desde un componente padre a un componente hijo y no pueden ser modificados por el componente hijo, un ejemplo seria que en ListaMascota, se pasa el array mascotas como prop a MascotaCard para mostrar toda la info, y el estado (useState) es un valor interno y mutable que pertenece a un componente, por ejemplo en app, el estado FiltroEspecie se usa para almacenar la especie seleccionada por el usuario y filtrar las mascotas mostradas