const { User } = require('../models'); // Thay đổi đường dẫn theo cấu trúc dự án
const { CatchAsyncError } = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const bcrypt = require('bcrypt');
const saltRounds = 10;


// Lấy danh sách tất cả người dùng
exports.getAllUsers = CatchAsyncError(async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ success: true, users });
    } catch (error) {
        return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
    }
});

// Lấy thông tin một người dùng theo ID
exports.getUserById = CatchAsyncError(async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return next(new ErrorHandler("Người dùng không tồn tại", 404));
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
    }
});

// Tạo mới một người dùng
exports.createUser = CatchAsyncError(async (req, res, next) => {
    try {
        const {username, firstName,lastName, email, phoneNumber,passwordHash,avatar ,statusId} = req.body;
        
        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(passwordHash, saltRounds);
        
        // Tạo người dùng với mật khẩu đã mã hóa
        const newUser = await User.create({
            username,
            firstName,
            lastName,
            phoneNumber,
            email,
            avatar,
            statusId,
            passwordHash: hashedPassword,
        });

        res.status(201).json({ success: true, user: newUser });
    } catch (error) { 
        console.log(error);
        return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
    }
});

// Cập nhật thông tin người dùng
exports.updateUser = CatchAsyncError(async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username, email, passwordHash } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return next(new ErrorHandler("Người dùng không tồn tại", 404));
        }

        await user.update({
            username,
            email,
            passwordHash,
        });

        res.status(200).json({ success: true, user });
    } catch (error) {
        return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
    }
});

// Xóa một người dùng
exports.deleteUser = CatchAsyncError(async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return next(new ErrorHandler("Người dùng không tồn tại", 404));
        }

        await user.destroy();

        res.status(200).json({ success: true, message: "Xóa người dùng thành công" });
    } catch (error) {
        return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
    }
});


exports.loginUser = CatchAsyncError(async (req, res, next) => {
    try {
        const { email, passwordHash } = req.body;
        
        // Tìm người dùng theo email
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return next(new ErrorHandler("Email hoặc mật khẩu không đúng", 401));
        }

        // Kiểm tra mật khẩu
        const isPasswordValid = await bcrypt.compare(passwordHash, user.passwordHash);

        if (!isPasswordValid) {
            return next(new ErrorHandler("Email hoặc mật khẩu không đúng", 401));
        }

        res.status(200).json({ success: true, message: "Đăng nhập thành công", user });
    } catch (error) {
        console.log(error);
        return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
    }
});