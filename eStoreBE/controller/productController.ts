import { Request, Response } from "express";
import SellerModel from "../model/SellerModel";
import productModel from "../model/productModel";
import { Types } from "mongoose";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { productName, productDetail, productPrice, productQTY, category } =
      req.body;
    const { sellerID } = req.params;

    const seller = await SellerModel.findById({
      sellerID,
    });

    if (seller && seller.status === "seller") {
      const product: any = await productModel.create({
        productName,
        productPrice,
        productDetail,
        productQTY,
        category,
        sellerID,
      });

      seller.sellerProduct.push(new Types.ObjectId(product?._id));
      seller.save();
      return res.status(404).json({
        message: "Error creating",
      });
    } else {
      return res.status(404).json({
        message: "you are unauthorized for this action",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error Creating",
    });
  }
};

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const product = await productModel.find();

    return res.status(200).json({
      message: "Products Found",
      data: product,
      status: 201,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error getting your product",
    });
  }
};

export const getSellerProduct = async (req: Request, res: Response) => {
  try {
    const { sellerID } = req.params;
    const product = await SellerModel.findById(sellerID).populate({
      path: "sellerProduct",
      options: {
        sort: {
          createdAT: -1,
        },
      },
    });

    return res.status(200).json({
      message: "Products found",
      data: product,
      status: 201,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error getting all Products",
    });
  }
};
