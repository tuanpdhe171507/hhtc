
const Category = require("../models/category");

const getAllCategories = async () => {
    try {
        const categories = await Category.find();
        return {
            status: "OK",
            message: "Products retrieved successfully",
            data: categories
        };
    } catch (error) {
        throw error;
    }
}

module.exports = { getAllCategories };