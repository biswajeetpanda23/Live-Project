const express = require("express");
const router = express.Router();
const Newsandannu = require("../models/Newsandannu");

router.get("/", async (req, res) => {
  try {
    const newsandannu = await Newsandannu.find();
    res.status(200).json({
      data: newsandannu,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const newsandannu = await Newsandannu.findById(req.params.id);

    res.status(200).json({
      data: newsandannu,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newsandannu = new Newsandannu(req.body);
    const newnewsandannu = await newsandannu.save();
    res.status(200).json({
      data: newnewsandannu,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating data" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const newUser = await Newsandannu.findOne({ email: req.body.email });
    if (newUser) {
      if (newUser.password === req.body.password) {
        res.status(200).json({
          msg: "Ok",
          data: newUser,
        });
      } else {
        res.status(200).json({
          msg: "Inccorect password",
        });
      }
    } else {
      res.status(200).json({
        msg: "Invalid user",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error creating data" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const newsandannu = await Newsandannu.findById(req.params.id);

    if (!newsandannu) {
      return res.status(400).json({ message: "Newsandannu not found" });
    }
    newsandannu.email = req.body.email || newsandannu.email;
    newsandannu.password = req.body.password || newsandannu.password;
    const updatedNewsandannu = await newsandannu.save();

    res.status(200).json({
      data: updatedNewsandannu,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating data" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Newsandannu.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Newsandannu is deleted",
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating data" });
  }
});

module.exports = router;