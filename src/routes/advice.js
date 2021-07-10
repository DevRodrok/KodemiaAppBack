const express = require("express");
const advice = require("../userCases/advice");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const allAdvices = await advice.getAll();
  res.json({
    success: true,
    data: allAdvices,
  });
});
router.get("/latest", async (req, res) => {
  const sortedByDate = await advice.getLatest();
  res.json({
    success: true,
    data: sortedByDate,
  });
});

// router.get("/getLastWeek", async (req, res) => {
//   const sortedByDate = await advice.getLastWeek();
//   res.json({
//     success: true,
//     data: sortedByDate,
//   });
// });

// router.get("/getLastMonth", async (req, res) => {
//   const sortedByDate = await advice.getLastMonth();
//   res.json({
//     success: true,
//     data: sortedByDate,
//   });
// });

// router.get("/getLastYear", async (req, res) => {
//   const sortedByDate = await advice.getLastYear();
//   res.json({
//     success: true,
//     data: sortedByDate,
//   });
// });

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { info, img, date, comments } = req.body;
    const newAdvice = await advice.postAdvice(info, img, date, comments);
    res.json({
      success: true,
      data: newAdvice,
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
