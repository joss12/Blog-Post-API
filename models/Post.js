const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: String,
    file: {
        type: mongoose.Types.ObjectId, ref:"file"
    },
    category:{
        type: mongoose.Types.ObjectId, ref: "category",
        require: true
    },
    updatedBy: {type: mongoose.Types.ObjectId, ref: "User",
        required: true
    }
}, {timestamps: true});

const Post = mongoose.model("post", postSchema);
module.exports = Post;