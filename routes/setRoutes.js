const express = require("express");
const {
    createNewSet
} = require("../controllers/SetController"); // Thay đổi đường dẫn theo cấu trúc dự án

const router = express.Router();


router.post("/", createNewSet);


module.exports = router;
