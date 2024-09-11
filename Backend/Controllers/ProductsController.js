import multer from "multer";
import Products from "../Models/Products.js";

// // Configure multer for file storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + '-' + file.originalname);
//   }
// });

// const upload = multer({ storage: storage });

// Register products endpoint
export const RegisterProducts = async (req, res) => {
  const { Name, Price, Category, Instock,Image } = req.body;

  if (!Name  ) {
    return res.status(400).send({ Message: "Name is  required", success: false });
  }

  if (!Price  ) {
    return res.status(400).send({ Message: "Name is  required", success: false });
  }

  if (!Category  ) {
    return res.status(400).send({ Message: "Categroy is  required", success: false });
  }

  if (!Instock  ) {
    return res.status(400).send({ Message: "Instock is  required", success: false });
  }

  try {
    const existingProduct = await Products.findOne({ Name });
    if (existingProduct) {
      return res.status(400).send({ Message: "Product already exists", success: false });
    }

    const newProduct = new Products({
      Name,
      Price,
      Image,
      Category,
      Instock,
    });
    await newProduct.save();
    return res.status(201).send({ Message: "Product created successfully", success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ Message: "Internal server error", success: false });
  }
};

// Delete product endpoint
export const DeleteProduct = async (req, res) => {
  try {
    const response = await Products.findByIdAndDelete(req.params.id);
    if (response) {
      return res.status(200).send({ Message: "Product deleted successfully", success: true });
    } else {
      return res.status(404).send({ Message: "Product not found", success: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ Message: "Internal server error", success: false });
  }
};

// Get all products endpoint
export const GetAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    if (products.length > 0) {
      return res.status(200).send({ products, success: true });
    } else {
      return res.status(404).send({ Message: "No products found", success: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ Message: "Internal server error", success: false });
  }
};

// Uncomment and update the following function if needed
// export const GetSingleProduct = async (req, res) => {
//   try {
//     const product = await Products.findById(req.params.id);
//     if (product) {
//       return res.status(200).send({ product, success: true });
//     } else {
//       return res.status(404).send({ Message: "Product not found", success: false });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send({ Message: "Internal server error", success: false });
//   }
// };
