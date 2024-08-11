const mongoose = require("mongoose");

const CartoonSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        year: {
            type:Number,
            required:true,
        },
        imgUrl:{
            type:String,
            required:false,
            default: "https://i.pinimg.com/736x/23/29/4c/23294c4e4bf92e54cad510e1ba1e0554.jpg"
        },
        review: {
            type:String,
            required:false,
        }
    },
    {
        timestamps:true
    }
)

const Cartoon = mongoose.model("Cartoon",CartoonSchema);
module.exports = Cartoon;