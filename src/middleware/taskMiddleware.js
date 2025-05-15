const validStatus = ["pending", "completed"];

export const sendTaskMiddleware = (req, res, next) => {
  const { title, status } = req.body;

  if (!title || !status) {
    return res.status(400).json({ message: "Some req are empty" });
  }

  if (!validStatus.includes(status)) {
    return res.status(400).json({
      message:
        "Invalid status value. Please, just send 'pending' or 'completed'",
    });
  }

  if (
    typeof title !== "string" ||
    typeof status !== "string" ||
    typeof description !== "string"
  ) {
    return res.status(400).json({ message: "body req must be strings" });
  }

  next();
};

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
};

export const editTaskMiddleware = (req, res, next) => {
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  if (!validStatus.includes(status)) {
    return res.status(400).json({
      message:
        "Invalid status value. Please, just send 'pending' or 'completed'",
    });
  }

  next();
};
