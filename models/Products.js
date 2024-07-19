const { Schema, model, models } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    minlength: [3, 'Product name must be at least 3 characters long'],
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    trim: true,
    // enum: ['Electronics', 'Clothing', 'Books', 'Home', 'Beauty', 'Sports'] 
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true,
    maxlength: [500, 'Product description cannot exceed 500 characters']
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Product price cannot be negative']
  },
  sku: {
    type: String,
    required: [true, 'Product SKU is required'],
    unique: true,
    trim: true,
    maxlength: [20, 'Product SKU cannot exceed 20 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Ensuring model isn't recompiled on server restart (specific to Next.js)
export const Product = models.Product || model('Product', ProductSchema);
