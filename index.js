const {fetchMyIP} = require('./iss');
const {fetchCoordsByIP} = require('./iss')
const {fetchISSFlyOverTimes} = require('./iss')

fetchMyIP((error, ip) => {
  if (error) {
    console.log('It didn\'t work!', error);
    return;
  }
  console.log('It worked!  Returned IP: ', ip)
});

// fetchCoordsByIP('24.86.36.161', (error, data) => {
//   if (error) {
//     console.log('no ip by that name', error);
//     return;
//   }
//   console.log(data);
// });

const coords = { latitude: 49.2827291, longitude: -123.1207375 }

fetchISSFlyOverTimes(coords, (error, data) => {
  if (error) {
    console.log('It didn\t work', error)
    return;
  }
  console.log(data);
});