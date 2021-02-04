const express = require ('express');
const router = express.Router();
const {getGoals,postGoals,deleteGoals} = require("../controllers/goals");

router.get('/goals',getGoals);
router.post('/goals', postGoals);
router.delete('/goals/:id', deleteGoals)

module.exports = router;