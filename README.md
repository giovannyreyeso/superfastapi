# superfastapi
Create a ultra fast easy api ( an ultra slim wrap from express )

### Please use ONLY for TEST or FUN propouses 
# Install
```bash
npm install superfastapi
```
## How to use
For use create a js file ( fast.js ) steps:
1) Create a empty folder with a name and run npm init -y
2) Create a empty file (fast.js)
3) Add a function with a name (must be a camelCase) 
2) The http method and endpoint was take it from function name for example getHello is GET method and endpoint is HELLO
3) Pass options to superFast like port and endpoints functions. izzi.
4) Run witn node file.js ( example: node fast.js )

Example:
```nodejs
const superFast = require('superfastapi');
function getTest(req, res) {
    res.status(200).json({ message: 'ok' });
}
function getHelloWorld(req, res) {
    res.status(200).json({ message: 'ok' });
}
function postTest(req, res) {
    console.log(req.body)
    res.status(200).json({ message: 'ok' });
}
superFast(
    {
        port: 3000,
        endpoints: [getTest, getHelloWorld, postTest]
    }
);
```
