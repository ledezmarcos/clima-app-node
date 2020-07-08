const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encodUrl = encodeURI(dir);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodUrl}&appid=c22dcd4759ac6ebff32edce5194689e1`);

    if (resp.data.length === 0) {
        throw new Error('Problema')
    }

    const direccion = resp.data.name;
    const lat = resp.data.coord.lat;
    const long = resp.data.coord.lon;
    return {
        direccion,
        lat,
        long
    }


}

module.exports = {
    getLugarLatLong
}