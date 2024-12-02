const express = require("express");
const {
    createNewFolder
} = require("../controllers/FolderController"); // Thay đổi đường dẫn theo cấu trúc dự án

const router = express.Router();


router.post("/", createNewFolder);


module.exports = router;
