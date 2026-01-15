const CategoryRouter = require("./CategoryRouter");

const routes = (app) => {
    app.use("/api/categories", CategoryRouter);
};

module.exports = routes;
