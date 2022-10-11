const superFast = require('./src/index');
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