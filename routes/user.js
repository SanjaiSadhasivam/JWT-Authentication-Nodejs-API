const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { userData } = require("../controllers/login");
const { imageUpload, imageData } = require("../controllers/imageUpload");

const router = express.Router();

router.use(cors());

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

router.post("/image/upload", upload.array("image"), imageUpload);

router.get("/image/upload/get", imageData);

// router.get("/users", authMiddleware.authenticateToken, userController.getUsers);
router.get("/userdata", userData);

module.exports = router;
