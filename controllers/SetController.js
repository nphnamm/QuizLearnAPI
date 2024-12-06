const { Set, User, Card, LearningProgress, Folder } = require('../models'); // Adjust path as needed
const { CatchAsyncError } = require("../middleware/catchAsyncErrors");
const ErrorHandler = require('../utils/ErrorHandler'); // Adjust path as needed


exports.createSet = CatchAsyncError(async (req, res, next) => {
    try {
        const { title, description, folderId, statusId } = req.body;
        const userId = req.user.id; // Assuming authentication middleware adds req.user

        if (!title) {
          return next(new ErrorHandler("Title is required", 400));
        }

        const newSet = await Set.create({
            userId,
            title,
            description,
            folderId,
            statusId,
        });

        res.status(201).json({
            success: true,
            set: newSet,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
    }
});


exports.getAllSets = CatchAsyncError(async (req, res, next) => {
    try {
        const sets = await Set.findAll();
        res.status(200).json({
            success: true,
            sets,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
    }
});


// exports.getSetById = CatchAsyncError(async (req, res, next) => {
//     try {
//         const set = await Set.findByPk(req.params.id, {
//             include: [{ model: User, as: 'user' }, { model: Card, as: 'cards' }, { model: LearningProgress, as: 'learningProgress' }, { model: Folder, as: 'folder' }, { model: Status, as: 'status' }],
//             where: { userId: req.user.id} //Only get sets that belong to current user

//         });
//         if (!set) {
//             return next(new ErrorHandler("Set not found", 404));
//         }
//         res.status(200).json({
//             success: true,
//             set,
//         });
//     } catch (error) {
//         return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
//     }
// });


exports.getAllSetsByUserId = CatchAsyncError(async (req, res, next) => {
    try {
        const userId = req.params.userId; // Get userId from the request parameters

        // Validate userId (optional, but recommended for security)
        if (!userId || isNaN(parseInt(userId))) {
            return next(new ErrorHandler("Invalid userId", 400));
        }


        const sets = await Set.findAll({ //Use active scope for only active sets
            where: { userId }, // Filter by userId
        });

        if (!sets || sets.length ===0){
          return next(new ErrorHandler("No sets found for this user", 404));
        }

        res.status(200).json({
            success: true,
            sets,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
    }
});

// exports.getAllSetsByUsername = CatchAsyncError(async (req, res, next) => {
//     try {
//         const username = req.params.userId; // Get username from request parameters
//         console.log('user',username)
//         // Validate username (optional, but recommended)
//         if (!username || typeof username !== 'string' || username.trim() === '') {
//             return next(new ErrorHandler("Invalid username", 400));
//         }

//         const sets = await Set.findAll({  //Use active scope for only active sets
//             include: [{
//                 model: User,
//                 as: 'user',
//                 where: { username }, // Join with Users and filter by username
//             }],
//             //No need for where clause here as we're filtering in the include
//         });


//         if (!sets || sets.length === 0) {
//             return next(new ErrorHandler("No sets found for this username", 404));
//         }

//         res.status(200).json({
//             success: true,
//             sets,
//         });
//     } catch (error) {
//         return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
//     }
// });

exports.updateSet = CatchAsyncError(async (req, res, next) => {
    try {
        const { title, description, folderId, statusId } = req.body;
        const set = await Set.findByPk(req.params.id, {where: { userId: req.user.id}}); //Only update sets that belong to current user

        if (!set) {
            return next(new ErrorHandler("Set not found", 404));
        }

        await set.update({
            title: title || set.title,
            description: description || set.description,
            folderId: folderId || set.folderId,
            statusId: statusId || set.statusId,
        });

        res.status(200).json({
            success: true,
            set: set,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
    }
});


exports.deleteSet = CatchAsyncError(async (req, res, next) => {
    try {
        const set = await Set.findByPk(req.params.id, { where: { userId: req.user.id } });

        if (!set) {
            return next(new ErrorHandler("Set not found", 404));
        }

        // Soft delete: Update the statusId instead of destroying
        await set.update({ statusId: 3 }); // Replace 3 with your "deleted" status ID

        res.status(200).json({
            success: true,
            message: "Set soft deleted successfully",
        });
    } catch (error) {
        return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
    }
});