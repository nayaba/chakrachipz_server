const { Schema } = require('mongoose')

const CartSchema = new Schema(
  {
    products_id: {
        type: Schema.Types.ObjectId,
        ref: 'product_id'
      },
    active: {
      type: Boolean,
      required: true
    },
    users_id: {
      type: Schema.Types.ObjectId,
      ref: 'user_id'
    }
  },
  { timestamps: true }
)

const Cart = mongoose.model('Cart', CartSchema)
module.exports = Cart
