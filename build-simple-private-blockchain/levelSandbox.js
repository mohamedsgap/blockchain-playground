const level = require('level');
const chainDB = './chaindata';
const db = level(chainDB);

// Add data to levelDB with key/value pair
export default function addLevelDBData(key,value){
  return new Promise(function(reslove, reject) {
    db.put(key, value, function(err) {
      if (err) {
        console.log('Block ' + key + ' submission failed', err);
        reject(err);
      }
      reslove(value);
    });
  });
}
