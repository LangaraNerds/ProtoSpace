const {authJwt} = require("../middleware");
module.exports = function (app) {

    const controller = require("../controller/workspaceController");
    let router = require("express").Router();

    router.post("/", controller.userWorkspace);

    app.use('/api/workspace', [authJwt.verifyToken], router);
};

