const Cartoon = require("../models/cartoon.model.js");

const getCartoons = async (req, res)=> {
    try {
        const cartoons = await Cartoon.find({});
        res.status(200).json(cartoons);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};

const addCartoon = async (req,res)=> {
    try {
        const cartoon = await Cartoon.create(req.body);
        res.status(200).json(cartoon);
    } catch(error) {
        res.status(500).json({message:error.message});
    }
};

const deleteCartoon = async (req,res)=> {
    try{
        const {id} = req.params;
        const cartoon = await Cartoon.findByIdAndDelete(id);
        if (!cartoon) {
            res.status(400).json({message:"Cartoon not found"});
        }

        res.status(200).json({message:"Cartoon deleted successfully"});

    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const updateCartoon = async (req,res)=> {
    try {
        const {id} = req.params;
        const cartoon = await Cartoon.findByIdAndUpdate(id,req.body);
        if (!cartoon) {
            res.status(400).json({message:"Cartoon not found"});
        }
        const updatedCartoon = await Cartoon.findById(id);
        res.status(200).json(updatedCartoon);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {getCartoons, addCartoon, deleteCartoon, updateCartoon};