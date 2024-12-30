 const mongoose = require("mongoose");

 const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: String,
    updateBy: {
        type:mongoose.Types.ObjectId, ref: "User",
        required: true
    }
 }, {timestamps: true});

 const category = mongoose.model("category", categorySchema);
 module.exports = category;