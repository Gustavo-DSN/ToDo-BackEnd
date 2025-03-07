require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@todo-list.i7d1u.mongodb.net/todo-list?retryWrites=true&w=majority&appName=todo-list`
		);

		console.log("Conectado ao banco de dados ✅");
	} catch (error) {
		console.error("Erro ao conectar ao banco de dados", error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
