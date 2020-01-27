/* Using BlockExplorer API to search Block Data */
// require the module
const be = require('blockexplorer');

// Explore Block Data function
function getBlock(index) {
  //Add your code here
 	// Start by requesting the hash
  // Then, request the block and use console.log.
  be.blockIndex(index)
    .then((result) => {
      const hash = JSON.parse(result).blockHash;
      console.log('blockHash: ' + hash);

      be.block(hash)
        .then((result) => {
          console.log('block: ' + result);
          console.log('------------------------');
      }).catch((err) => {
        console.log(err);
      });

      return;
    })
    .catch((err) => {
      console.log(err);
    })

}

(function theLoop (i) {
	setTimeout(function () {
    getBlock(i);
    i++;
    if (i < 3) theLoop(i);
	  }, 3600);
  })(0);
