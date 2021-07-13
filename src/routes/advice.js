const express = require("express");
const advice = require("../userCases/advice");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const {generation} = req.body
  const allAdvices = await advice.getAllByGeneration(generation);
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

router.patch("/:id", async(req,res) => {
  const id = req.params.id
  const updatedAdvice = await advice.increaseLikes(id)
  res.json({
    success: true,
    data: updatedAdvice
  })
})

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { info, title, img, generation } = req.body;
    const newAdvice = await advice.postAdvice(info, title, img, generation);
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
