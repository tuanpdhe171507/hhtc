const Product = require("../models/product");
const Category = require("../models/category");

const getAllProducts = async () => {
    try {
        const products = await Product.find(
            {}, // điều kiện
            {
                name: 1,
                price: 1,
                category: 1,
            }
        )
            .populate({
                path: "category",
                select: "name description",
            })
            .lean();

        return {
            status: "OK",
            message: "Products retrieved successfully",
            data: products,
        };
    } catch (error) {
        throw error;
    }
};


const createProduct = async (productData) => {
    try {
        const product = await Product.create(productData);
        return {
            status: "OK",
            message: "Product created successfully",
            data: product
        };
    } catch (error) {
        throw error;
    }
};

const updateProduct = async (productId, productData) => {
    try {
        const product = await Product.findByIdAndUpdate(productId, productData, { new: true });
        return {
            status: "OK",
            message: "Product updated successfully",
            data: product
        };
    } catch (error) {
        throw error;
    }
};

const getDetailsProduct = async (productId) => {
    try {
        const product = await Product.findOne({ _id: productId }).populate("category");
        if (product === null) {
            return {
                status: "ERR",
                message: "The product is not defined"
            }
        }
        return {
            status: "OK",
            message: "SUCCESS",
            data: product
        }
    } catch (e) {
        throw e
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    getDetailsProduct
};
