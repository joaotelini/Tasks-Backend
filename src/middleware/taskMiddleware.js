export const sendTaskMiddleware = (req, res, next) => {
  const { name, status } = req.body;

  if (!name || !status) {
    return res.status(400).json({ message: "Name and status are required" });
  }

  if (typeof name !== "string" || typeof status !== "string") {
    return res.status(400).json({ message: "Name and status must be strings" });
  }

  next();
}

export const verifyIdMiddleware = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  if (isNaN(id)) {
    return res.status(400).json({ message: "ID must be a number" });
  }
  
  if (id <= 0) {
    return res.status(400).json({ message: "ID must be greater than 0" });
  }

  next();
}

export const editTaskMiddleware = (req, res, next) => {
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  const validStatuses = ["done", "doing", "todo"];

  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status value. Please, just send 'done, doing or todo'" });
  }

  next();
}