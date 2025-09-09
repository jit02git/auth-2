const User = require("../model/User");

const addUser = (req, res) => {
  const { name, email, phone, address, city, state, country } = req.body;
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      console.log("User added successfully");
      res.status(201).json({ message: "User added successfully", data: user });
    })
    .catch((error) => {
      console.error("Failed to add user:", error);
      res.status(500).json({ error: "Failed to add user" });
    });
};

const userUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    const updates = req.body;

    const updateUser = await User.findByIdAndUpdate(updates, _id, { new: true });

    if (!updateUser) {
      res.error(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Update user error", error);
    res.status(500).json({ message: "server error" });
  }
};

const viewUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: "User not found"})
    }
    res.status(200).json({ data: user});

  } catch (error) {
    console.log("View user error", error);
    res.status(500).json({message: "server error"});
  }
}

const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const user = User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({message: "User not found"});
    } 
    res.status(200).json({message: "User deleted successfully"});
  } catch (error) {
    console.log("Delete user error", error);
    res.status(500).json({message: "server error"});
  }
}
module.exports = { addUser, userUpdate, viewUser, deleteUser };
