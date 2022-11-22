const request = require('request-promise-native');
const printPassTimes = require('./index')

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
}

/* 
 * Makes a request to ipwho.is using the provided IP address to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */
const fetchCoordsByIP = function(body) {
  data = JSON.parse(body).ip;
  return request(`http://ipwho.is/${data}`);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  const url = request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
  return request(url);
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    })
};

module.exports = {nextISSTimesForMyLocation};