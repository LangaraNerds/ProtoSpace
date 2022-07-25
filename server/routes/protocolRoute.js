const controller = require("../controller/protocolController");
const {authJwt} = require("../middleware");
let router = require("express").Router();

module.exports = function (app) {

    router.post("/", controller.createProtocol);

    router.post('/find', controller.findProtocol);

    router.post('/run', controller.runProtocol);

    router.post('/status', controller.statusProtocol);

    router.post('/find/byworkspace', controller.findProtocolWorkspace);

    app.use('/api/protocol',  router);
};

