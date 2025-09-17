const User = require("../model/Auth");

export default register = async (req, res) => {
  try {
    const { name, email, password, phone, address, city, state, country } =
      req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashPassword,
      phone,
      address,
      city,
      state,
      country,
    });

    await user.save();
    res
      .status(201)
      .json({ message: "User registered successfully", data: user });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

