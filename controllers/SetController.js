const { Set } = require('../models'); // Thay đổi đường dẫn theo cấu trúc dự án
const { CatchAsyncError } = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.createNewSet = CatchAsyncError(async (req, res, next) => {
    try {
        const { userId, title, description, statusId,folderId } = req.body;

        // Validate required fields
        if (!userId || !title || !statusId) {
          return res.status(400).json({ message: 'User ID, title, and status ID are required.' });
        }
  
        const newSet = await Set.create({ userId, title, description, statusId ,folderId});
        res.status(201).json(newSet);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

