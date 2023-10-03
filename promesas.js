const datos = [1, 2, 3, ,4 , 5];

const getDataPromise = new Promise(
    (resolve, reject) => {
        setTimeout (() => {
            //resolve(datos);
            reject('No se pudo :000')
        }, 3000);
    }
);

//console.log(getDataPromise);

console.log('Inicia la promesa')
getDataPromise.then((result) => {
    console.log(result);
    console.log('Termina la promesa')
}).catch(error => console.log(error));