const { Folder } = require('../models'); // Thay đổi đường dẫn theo cấu trúc dự án
const { CatchAsyncError } = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const bcrypt = require('bcrypt');
const saltRounds = 10;


// Tạo mới một người dùng
exports.createNewFolder = CatchAsyncError(async (req, res, next) => {
    try {
        const { name, description, statusId, userId } = req.body;

        // Validate required fields
        if (!name || !statusId || !userId) {
            return res.status(400).json({ message: 'Name, statusId, and userId are required.' });
        }

        // Create the folder
        const folder = await Folder.create({ name, description, statusId, userId });
        res.status(201).json(folder);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

