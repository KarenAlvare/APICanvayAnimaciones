//Fetch es una función para obtener recursos
//nos retorna una promesa
// then y chatch

console.log('Inicia Petición');
fetch('http://127.0.0.1:5500/respuestas.txt')
    .then(result => result.text())
    .then(datos => console.log(datos));

console.log('Inicia Petición 1');
fetch('http://127.0.0.1:5500/respuestas.json')
    .then(result => result.json())
    .then(datos => console.log(datos));