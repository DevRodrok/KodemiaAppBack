
const express = require("express");
const subject = require("../userCases/resources");
const router = express.Router();

router.post("/byModule", async (req, res) => {
  const { moduleName } = req.body;
  const allResources = await subject.getByModule(moduleName);
  res.json({
    success: true,
    data: allResources,
  });
});

router.post("/", async (req, res) => {
  try {
    const { moduleName, title, resources } = req.body;
    const newResource = await subject.postResource(moduleName, title, resources);
    res.json({
      success: true,
      data: newResource
    });
  } catch (error) {
    res.status(401);
    res.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;