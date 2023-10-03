const teams = ["Liverpool", "Dortmun", "Chelsie"];

setTimeout(() => console.log('Tarea asincrona'));

console.log('Sigue ejecutando');
console.log(teams);

function getTeams(){
    return teams;
}

function asincGeTeams(){
    setTimeout(() => teams, 2000);
}

console.log(getTeams());
console.log('Final de código');

console.log(getTeams());
console.log('Termina el llamado de función')