const createVenue = async (req, res) => {
  res.send("create venue");
};

const deleteVenue = async (req, res) => {
  res.send("delete venue");
};

const getAllVenue = async (req, res) => {
  res.send("get all venue");
};

const updateVenue = async (req, res) => {
  res.send("update venue");
};

const showStats = async (req, res) => {
  res.send("show stats");
};

export { createVenue, deleteVenue, getAllVenue, updateVenue, showStats };
