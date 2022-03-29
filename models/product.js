const { Schema } = require('mongoose')

const ProductSchema = new Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        enum: ['Cake', 'Cupcake'],
        required: [true, 'Please specify Cake or Cupcake']
    },
    qty: { 
        type: Number,
        enum: [1, 6, 12]
    }
  },
  { timestamps: true }
)

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product