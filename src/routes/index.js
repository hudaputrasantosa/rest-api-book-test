const express = require("express");
const bookRoutes = require("./bookRoutes");
const memberRoutes = require("./memberRoutes");
const loanRoutes = require("./loanRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../config/swagger.json");
const router = express.Router();

router.use("/books", bookRoutes);
router.use("/loans", loanRoutes);
router.use("/members", memberRoutes);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
