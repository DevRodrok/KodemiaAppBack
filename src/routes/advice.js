const express = require("express");
const advice = require("../userCases/advice");
const authMiddleware = require("../middlewares/auth");
const auth = require('../userCases/auth')

const router = express.Router();

router.post("/byGeneration", async (req, res) => {
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

router.patch("/:id", authMiddleware, async(req,res) => {
  const id = req.params.id
  const token = req.get('Authorization')
  try {
    const updatedAdvice = await advice.increaseLikes(id, token)
    res.json({
      success: true,
      data: updatedAdvice
    })
  } catch (error) {
    res.status(401)
    res.json({
      success: false,
      message: error.message
    })
  }

})

router.post("/", authMiddleware, async (req, res) => {
  const token = req.get('Authorization')
  try {
    const userType = await auth.getUserType(token)
    if(!userType){
      throw new Error("Not an Admin")
    }
    const { info, title, img, generation } = req.body;
    const newAdvice = await advice.postAdvice(info, title, img, generation);
    const response =await advice.sendAdvice(info, generation.number)
    
    
    
    
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
