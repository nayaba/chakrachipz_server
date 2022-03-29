const { Schema } = require('mongoose')

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
        type: String,
        required: true
      },
    admin: {
      type: Boolean,
      required: true
    },
    payments_id: {
      type: Schema.Types.ObjectId,
      ref: 'payment_id'
    },
    favorites_id: {
      type: Schema.Types.ObjectId,
      ref: 'favorite_id'
    }
  },
  { timestamps: true }
)

const User = mongoose.model('User', UserSchema)
module.exports = User
