const express = require("express");
const {
    createSet,
    getSetById,
    getAllSets,
    updateSet,
    deleteSet,
    getAllSetsByUsername,
    getAllSetsByUserId
} = require("../controllers/SetController"); // Thay đổi đường dẫn theo cấu trúc dự án

const router = express.Router();



router.get("/", getAllSets);
router.get("/:userId", getAllSetsByUserId);
router.post("/", createSet);
router.put("/:id", updateSet);
router.delete("/:id", deleteSet);




module.exports = router;
