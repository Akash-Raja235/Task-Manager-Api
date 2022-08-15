

const express = require("express");

const router = express.Router()

const controller =require('../controllers/control')


router.get("/", controller.getTask);
router.post("/", controller.postTask);
router.get("/:id", controller.getTaskSingle);
router.patch("/:id", controller.patchTask);
router.delete("/:id", controller.deleteTask);

module.exports = router;






