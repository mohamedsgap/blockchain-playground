# P3_Created a RESTful API to iintact with my private Blockchain.

I solved the challenge to persist our blockchain dataset. next challenge is to build a RESTful API using a Node.js framework that will interface with my private blockchain.

By configuring an API for my private blockchain I expose functionality that can be consumed by several types of web clients ranging from desktop, mobile, and IoT devices.

For this project, I will be creating a RESTful web API for my private blockchain. The API project will require two endpoints:

* Get block
* Post block

## Select Node.js framework

For the development of the project we used the [Express framework](https://expressjs.com/).

## Getting Started

```
npm install
```

## Run the project

```
node app.js 
```

## Project endpoints

Several tools are available on the internet to assist with API development and testing. If your having troubles testing my endpoints, try one of the tools listed below:

* Postman is a powerful tool used to test web services. It was developed for sending HTTP requests in a simple and quick way.
* CURL is a command-line tool used to deliver requests supporting a variety of protocols like HTTP, HTTPS, FTP, FTPS, SFTP, and many more.

_Get block endpoint:_

```
http://localhost:8000/block/{block_height}
```

Curl example:

```
curl "http://localhost:8000/block/0"
```

_Post block endpoint:_
```
http://localhost:8000/block
```

Curl example:
```
curl -X "POST" "http://localhost:8000/block" \
     -H 'Content-Type: application/json' \
     -d $'{
  "body": "Testing block with test string data"
}'
```
