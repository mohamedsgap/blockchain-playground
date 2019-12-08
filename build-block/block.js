/**
 * Import crypto-js/SHA256 library
 */
const SHA256 = require("crypto-js/sha256");

/**
 * Class with a constructor for block
 */
class Block {
  constructor(data) {
    this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = "";
  }

  /**
   * Step 1. Implement `generateHash()`
   * method that return the `self` block with the hash.
   *
   * Create a Promise that resolve with `self` after you create
   * the hash of the object and assigned to the hash property `self.hash = ...`
   */
  //
  generateHash() {
    // Use this to create a temporary reference of the class object
    //Implement your code here
    return new Promise((resolve, reject) => {
      // Implement your hash logic here
      // simulate complex hash calculation
      setTimeout(() => {
        // returning random int(hex) for simplicity
        let hash = Math.floor(Math.random() * (2 << 21)).toString(16);
        this.hash = hash; // save new hash
        resolve(this); // resolve with this block
      }, 3000);
    });
  }
}

// Exporting the class Block to be reuse in other files
module.exports.Block = Block;
