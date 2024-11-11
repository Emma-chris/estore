import { Application, Request, Response } from "express";
import seller from "./router/sellerRouter";
import product from "./router/productRouter";
export const mainApp = async (app: Application) => {
  try {
    app.use("/api", seller);
    app.use("/api", product);

    app.use("/", (req: Request, res: Response) => {
      try {
        res.json({
          message: "welcome to the default API",
        });
      } catch (error) {
        res.status(404).json({
          message: "Error read path",
        });
      }
    });
  } catch (error) {
    return error;
  }
};
