import ProductModel from '#models/product.model.js';

/**
 * @desc		Fetch all products
 * @route		GET /api/v1/products
 * @access	public
 */
const getProducts = async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
};

/**
 * @desc		Fetch single product
 * @route		GET /api/v1/products/:id
 * @access	public
 */
const getProductById = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

/**
 * @desc		Create product
 * @route		POST /api/v1/products
 * @access	private/admin
 */
const createProduct = async (req, res) => {
  const product = new ProductModel({
    name: 'Sample name',
    user: req.user._id,
    price: 0,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
    content: 'Sample content',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

export { createProduct, getProductById, getProducts };
