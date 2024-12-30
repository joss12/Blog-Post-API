const express = require("express");
const isAuth = require("../middlewares/isAuth");
const { postController } = require("../controllers");
const { addPostValidator, updatePostValidator, idValidator } = require("../validator/post");
const validator = require("../validator/validator");

const router = express.Router();


router.post("/", isAuth, addPostValidator, validator, postController.addPost);
router.put("/:id", isAuth, updatePostValidator, idValidator, validator, postController.updatePost)
router.delete("/:id", isAuth, idValidator, validator, postController.deletePost);
router.get("/", isAuth, postController.getPosts);
router.get("/:id", isAuth, idValidator, validator, postController.getPostById)
module.exports = router;