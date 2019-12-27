const Axios = require('axios');
const Service = require('./service');
const axiosInstance = Axios.create({
    headers: {'X-Requested-With': 'XMLHttpRequest','User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36', 'Referer': 'http://e.xitu.io/'}
});

module.exports = function(serviceName, methodName, log) {
    console.log(Service[serviceName][methodName], methodName);
    return async function(params) {
        console.log(JSON.stringify(params));
        const result = await Service[serviceName][methodName](axiosInstance, params, log);
        return result;
    }
}
