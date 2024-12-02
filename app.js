const express = require('express');
const app = express();
const { sequelize } = require('./models');
const userRoutes = require("./routes/userRoutes"); // Thay đổi đường dẫn phù hợp

app.use(express.json());

// Import routes ở đây
// Routes
app.use("/api/users", userRoutes);

// Middleware xử lý lỗi
// app.use((err, req, res, next) => {
//     res.status(err.statusCode || 500).json({
//         success: false,
//         message: err.message || "Internal Server Error",
//     });
// });

const PORT = process.env.PORT || 3001;
sequelize.sync().then(() => {
    console.log("Database synced successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch((error) => {
    console.error("Unable to sync database:", error);
  });