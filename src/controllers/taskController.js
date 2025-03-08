const Task = require("../models/Task");

// Cria uma tarefa
exports.createtask = async (req, res) => {
	try {
		const task = await Task.create(req.body);

		res.status(201).json(task);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Busca por todas as tarefas
exports.getTasks = async (req, res) => {
	try {
		const task = await Task.find();

		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Busca uma tarefa específica por ID
exports.getTaskById = async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);

		if (!task)
			return res.status(404).json({ error: "Tarefa não encontrada" });

		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Atualizar uma tarefa
exports.updateTask = async (req, res) => {
	try {
		const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});

		if (!task)
			return res.status(404).json({ error: "Tarefa não encontrada" });

		res.status(200).json(task);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Excluir uma tarefa
exports.deleteTask = async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id);
		if (!task)
			return res.status(404).json({ error: "Tarefa não encontrada" });
		res.status(200).json({ message: "Tarefa removida com sucesso" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
