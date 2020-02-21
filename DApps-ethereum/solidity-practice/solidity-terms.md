
## Smart Contract Lifecycle

*Develop - Write the contract and compile.
*Deploy - Once deployed, the smart contract is un-editable. After deploying on any network (e.g. mainnet, testnet), you get an address specific to where contract was deployed.
*Invoke - Use the address created after the smart contract is deployed to invoke contract to call functions on it.
*Destroy - Once a contract has finished its purpose, it is important to destroy it so no one can call functions on it anymore. Remember that smart contracts cannot be edited once deployed. Also, often smart contracts are tied to funds, so keeping it around if it is no longer used puts these funds at risk.

******* ABI: Application Binary Interface ******* 

### Remix Environment Summary
Remix offers these 3 environment options when deploying a contract:

*Javascript VM (an in-browser ethereum network, used for testing)
*Injected web3 (used in conjunction with Metamask to deploy to public networks)
*Web3 provider (used to connect to a locally running node)


### Memory Management in Solidity
#### Definitions
*memory - Used for temporary storage of data, information is lost after function execution
*storage - Used for variables in storage, stay with the contract, and the data persists
*callData - Like a stack. Used for EVM call execution


### Elementary Data Types in Solidity
Similar to other languages, Solidity has elementary and complex data types. Let's first focus on the elementary data types:

*uint
*int
*bool
*address


### Definitions
*uint - Use for unsigned integers of various sizes
*int - Use for signed integers of various sizes
*bool - The possible values are constants true and false
*address - Represents address of externally owned account or contract account. Holds a 20 byte hex string of an Ethereum address. It is a Value Type.



### Type Conversion in Solidity
All programming languages support some sort of type conversion. Solidity gives us the option for implicit and explicit type conversion.


### Definitions
*Implicit Conversions
"If an operator is applied to different types, the compiler tries to implicitly convert one of the operands to the type of the other (the same is true for assignments). In general, an implicit conversion between value-types is possible if it makes sense semantically and no information is lost: uint8 is convertible to uint16 and int128 to int256, but int8 is not convertible to uint256 (because uint256 cannot hold e.g. -1)." (Source: Solidity Documentation v. 0.5.0)

*Explicit Conversions
"If the compiler does not allow implicit conversion but you know what you are doing, an explicit type conversion is sometimes possible. Note that this may give you some unexpected behaviour and allows you to bypass some security features of the compiler, so be sure to test that the result is what you want!" (Source: Solidity Documentation v. 0.5.0)

### Complex Data Types in Solidity

*Arrays
*Structs
*Mapping
*Strings
*Bytes
*Enums


### Solidity Global Variables and Ether Units

* Block Global Variable
* Tx Global Variable
* Msg Global Variable
* Ether Unit conversions using Global prefixes
* Time Unit conversions using Global prefixes



### Functions in Solidity
Let's add some utility to our contracts with functions! Functions are the executable units of code within a contract. the different function types, fallback functions, constructor functions, and function modifiers.



### Fallback Functions and Function Modifiers
In the next video, we will explore fallback functions and function modifiers.

Fallback Functions
Fallback functions provide a safeguard. They are automatically triggered if the function signature does not match any of the function signatures in the smart contract. A contract can have exactly one fallback function. These fallback functions are unnamed. are important and how to create them.

Function Modifiers
"Modifiers can be used to easily change the behaviour of functions. For example, they can automatically check a condition prior to executing the function. Modifiers are inheritable properties of contracts and may be overridden by derived contracts." (Source - Solidity documentation v.0.5.0)



### Error Handling in Solidity
Every programming language needs to effectively handle errors. Let's see the different ways to do so in Solidity using these functions:

revert ( )
require ( )
assert ( )



### Inheritance in Solidity
Similar to other languages, Solidity supports multiple inheritance and interfaces. When a contract inherits from other contracts, only a single contract is created on the blockchain, and the code from all the base contracts is copied into the created contract.
when inheriting contracts using the import statement. Additionally, we will see how to create abstract Contracts using the interface keyword.


### Events in Solidity
Solidity events are similar to Javascript events that can be set to trigger when something (i.e. an event) happens. This is a very powerful feature that will play a huge part when we create DApps (decentralized application)

DApps, websites, or anything connected to Ethereum JSON-RPC API, can listen to these events and act accordingly. For example, we could create a banking DApp that listens for the user to click the deposit button. Once the button is clicked, the deposit event fires which will deposit the appropriate value into the assigned wallet address:

event Deposit(address from, uint value);



### Ethereum DApps, Ether, and Tokens
One of the differentiating features of Ethereum and any other cryptocurrency is that it�s not just a currency, it�s an environment. This means that we can build projects and DAPPS (decentralized applications) on its blockchain via smart contracts.

While Ethereum does have its own currency, ether, an important concept to understand is that they are different from tokens and they serve a different purpose.

Ether - The native currency of Ethereum use to power smart contracts

Tokens - Different from Ether. Tokens are a cryptocurrency that�s built on the Ethereum platform.

Why not just use ether?
DApps created on the Ethereum platform are powered their own tokens. Why not just use ether? Using tokens to execute certain functions in the smart contract of the DAPPS makes the process simpler and more seamless.

Tokens are simply digital assets that are built on top of the Ethereum blockchain, so developers do not have to go and create their own blockchain. Using tokens instead of straight ether also strengthens the Ethereum ecosystem by driving demand for ether.

CryptoKitties - Tokens as a Trade-able Good
Tokens in the Ethereum ecosystem can represent any fungible tradable good: coins, loyalty points, gold certificates, IOUs, in-game items, etc. The widely popular blockchain game CryptoKitties is an ideal example of tokens. Each cryptokitty collectible is a digital asset - a token. This token can be claimed by an owner, sold, and bought

#### Tokens Recap
Smart contracts are used to create Tokens. These smart contracts also facilitate transactions of tokens, and record balances of tokens in an account.
After a token has been created, it can be traded, spent, or given to someone else.



### ERC
Every development project improves overtime and Ethereum is no exception. Similar to Bitcoin Improvement Proposals (BIPs), Ethereum has Ethereum Improvement Proposals (EIPs). Ethereum Improvement Proposals (EIPs) describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards.

Included under EIPs are ERCs, Etherum Requests for Comments (a full list can be found here). Some common ERCs resulted interfaces developers can use to create token.
For example,

ERC-20 - A standard interface for fungible tokens.
ERC-721 - A standard interface for non-fungible tokens, also known as deeds.

### Difference between Fungible and Non-Fungible Tokens
Now you might be wondering, what is the difference between fungible and non-fungible?

Fungible Token
A Fungible Token is a token, where all tokens are exactly the same.

They have the same value.
For example, any 1 dollar bill is equal to another 1 dollar bill.
All the widely used ERC-20 tokens are fungible tokens.
Fungible Token
A Non-Fungible Token is a special type of cryptographic token which represents something unique.

Non-Fungible tokens are not interchangeable, because they all have a different value.
For example, if we represented real estate parcels in tokens, not all parcels would be equal in value, hence all these tokens will also not be equal in value.
ERC-721 is a non-fungible token standard.
The famous CryptoKitties Token is an ERC-721 non-fungible token.


### ERC-20 Token Interface
The ERC-20 Token interface has 3 optional fields, 2 events, and 6 mandatory functions:

Optional Fields

* Name of the token
* Symbol of the token
* Decimals values in tokens
* Events

* transfer event
* approve event
* Mandatory Functions

1. totalSupply ( ) function
2. balanceOf ( ) function
3. transfer ( ) function
4. transferFrom ( ) function
5. approve ( ) function
6. allowance ( ) function

```js
// ----------------------------------------------------------------------------
// ERC Token Standard #20 Interface
// ----------------------------------------------------------------------------

pragma solidity ^0.4.25;

contract ERC20Interface {

string public constant name = "Mohamed Token";
string public constant symbol = "MOHD";
uint8 public constant decimals = 18; // 18 is the most common number of decimal places

event Transfer(address indexed from, address indexed to, uint tokens);
event Approval(address indexed tokenOwner, address indexed spender, uint tokens);

function totalSupply() public constant returns (uint);
function balanceOf(address tokenOwner) public constant returns (uint balance);
function transfer(address to, uint tokens) public returns (bool success);
function transferFrom(address from, address to, uint tokens) public returns (bool success);
function approve(address spender, uint tokens) public returns (bool success);
function allowance(address tokenOwner, address spender) public constant returns (uint remaining);

}
```



