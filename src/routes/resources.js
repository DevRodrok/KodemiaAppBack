const express = require("express");
const subject = require("../userCases/Resources");

const router = express.Router();

router.get("/", async (req, res) => {
  const { moduleName } = req.body;
  const allResources = await subject.getByModule(moduleName);
  res.json({
    success: true,
    data: allResources,
  });
});

router.post("/", async (req, res) => {
  try {
    const { moduleName, resources } = req.body;
    const newResource = await subject.postResource(moduleName, resources);
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