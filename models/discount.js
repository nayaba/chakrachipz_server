const { Schema } = require('mongoose')

const DiscountSchema = new Schema(
  {
    value: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
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

const Discount = mongoose.model('Discount', DiscountSchema)
module.exports = Discount
