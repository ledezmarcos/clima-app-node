const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async() => {
    try {
        const coordenadas = await lugar.getLugarLatLong(argv.direccion);
        const info = await clima.getClima(coordenadas.lat, coordenadas.long);
        return `El clima de ${argv.direccion} es ${info}.`;
    } catch (error) {
        return `No se pudo obtener la temperatura de ${argv.direccion}.`;
    }
};

getInfo()
    .then(console.log)
    .catch(console.log);


/* lugar.getLugarLatLong(argv.direccion)
    .then(console.log); */

/* clima.getClima(35, 139)
    .then(console.log); */
//console.log(argv.direccion);