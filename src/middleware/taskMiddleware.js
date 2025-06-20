export const sendTaskMiddleware = (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "'title' is a requirement" });
  }

  if (typeof title !== "string" || !title.trim()) {
    return res.status(400).json({ message: "'title' is a required string" });
  }

  next();
};

export const editTaskMiddleware = (req, res, next) => {
  const { status } = req.body;

  if (status === undefined) {
    return res.status(400).json({ message: "'status' is a requirement" });
  }

  if (typeof status !== "boolean") {
    return res
      .status(400)
      .json({ message: "'status' must be a boolean (true or false)" });
  }

  next();
};

export const verifyIdMiddleware = (req, res, next) => {
  const { id } = req.params;

  const numericId = Number(id);

  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  if (!id || isNaN(numericId) || numericId <= 0) {
    return res.status(400).json({ message: "ID must be a positive number" });
  }

  next();
};
