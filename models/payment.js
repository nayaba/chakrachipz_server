const { Schema } = require('mongoose')

const PaymentSchema = new Schema(
  {
    default: {
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

const Payment = mongoose.model('Payment', PaymentSchema)
module.exports = Payment
