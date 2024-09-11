import express from "express";
import {
  RegisterProducts,
  GetAllProducts,
  DeleteProduct,
//   ImageUploader,
} from "../Controllers/ProductsController.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
const ProRoutes = express.Router();
ProRoutes.post("/register", RegisterProducts);
ProRoutes.delete("/del/:id", DeleteProduct);
ProRoutes.get("/users", GetAllProducts);
// ProRoutes.post("/uploadImage", upload.single("Image"), ImageUploader);
export default ProRoutes;
