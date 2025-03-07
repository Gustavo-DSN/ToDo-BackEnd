const express = require("express");
const router = express.Router();
const taskRoutes = require("./taskRoutes");

router.use("/tasks", taskRoutes);

router.get("/", (req, res) => {
	res.send("API To-Do Funcionando !");
});

module.exports = router;
