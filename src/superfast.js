const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mainRouter = express.Router();
function superFast(options) {
    if (typeof (options) === 'object') {
        startExpress(options.port, options.base, options.endpoints)
        return;
    }
    console.error('Please pass an object options to superFast function');
    process.exit(1);
}
function startExpress(port, base, endpoints) {
    app.listen(port, () => {
        console.log(`Super fast api server listening on port ${port}`);
        if (base) {
            console.log(`Using endpoint base: /${base}`)
        }
    });
    for (func of endpoints) {
        const router = express.Router();
        var funcName = func.name.replace(/([a-z](?=[A-Z]))/g, '$1 ').split(' ');
        if (funcName[0] === 'get') {
            router.get(`/${funcName[1].toLowerCase()}`, func);
            mainRouter.use(router);
        }
        if (funcName[0] === 'post') {
            router.post(`/${funcName[1].toLowerCase()}`, func);
            mainRouter.use(router);
        }
        console.log(`Endpoint [${funcName[0]}]: ${base ? `/${base}/${funcName[1].toLowerCase()}` : `/${funcName[1].toLowerCase()}`}`);
    }
    if (base) {
        app.use(`/${base}`, mainRouter);
    } else {
        app.use(`/`, mainRouter);
    }
}
module.exports = {
    superFast
}