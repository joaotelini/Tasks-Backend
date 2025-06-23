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

  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  next();
};
