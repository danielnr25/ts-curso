
// const listaFrutas: string[] = ['platano','manzana','pera','fresa','naranja','uva'];

// const $listaFrutasDOM = document.getElementById('listadoFrutas') as HTMLUListElement;

// listaFrutas.forEach((fruta) => {
//    const $item = document.createElement('li');
//    $item.textContent = fruta;
//    $listaFrutasDOM.appendChild($item);
// });

// const listadoFrutas = [
//    { nombre: 'platano', precio: 1.5},
//    { nombre: 'manzana', precio: 2 },
//    { nombre: 'pera', precio: 3 },
//    { nombre: 'fresa', precio: 4 },
//    { nombre: 'naranja', precio: 1.5 },
//    { nombre: 'uva', precio: 2 }
// ];

// const $listaFrutasDOM = document.getElementById('listadoFrutas') as HTMLUListElement;

// listadoFrutas.forEach((fruta) => {
//    const $item = document.createElement('li');
//    $item.textContent = `${fruta.nombre} - ${fruta.precio} `;
//    $listaFrutasDOM.appendChild($item);
// });

//Una interfaz en TypeScript se usa para definir la estructura de un objeto, especificando qué propiedades debe tener y de qué tipo son.
//name: string y precio: number: La interfaz Fruta especifica que cualquier objeto de tipo Fruta debe tener dos propiedades: name y precio.

interface Fruta{
   nombre: string;
   precio: number;
}

const listadoFrutas: Fruta[] = [
   { nombre: 'platano', precio: 1.5},
   { nombre: 'manzana', precio: 2 },
   { nombre: 'pera', precio: 3 },
   { nombre: 'fresa', precio: 4 },
   { nombre: 'naranja', precio: 1.5 },
   { nombre: 'uva', precio: 2 }
];

const $listaFrutasDOM = document.getElementById('listadoFrutas') as HTMLUListElement;

listadoFrutas.forEach((fruta) => {
   const $item = document.createElement('li');
   $item.textContent = `${fruta.nombre} - ${fruta.precio}`;
   $listaFrutasDOM.appendChild($item);
});