const mongoose = require('mongoose')

// validators
// String
// lowercase: boolean, whether to always call .toLowerCase() on the value
// uppercase: boolean, whether to always call .toUpperCase() on the value
// trim: boolean, whether to always call .trim() on the value
// match: RegExp, creates a validator that checks if the value matches the given regular expression
// enum: Array, creates a validator that checks if the value is in the given array.
// minlength: Number, creates a validator that checks if the value length is not less than the given number
// maxlength: Number, creates a validator that checks if the value length is not greater than the given number

// numbers
// min: Number, creates a validator that checks if the value is greater than or equal to the given minimum.
// max: Number, creates a validator that checks if the value is less than or equal to the given maximum.

// date
// min: Date
// max: Date

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Needs full name'], // can be a function
      trim: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
      trim: true,
      required: [true, 'Needs Email']
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'visitor'],
      default: 'user'
    }
  },
  { timestamps: true }
)

User.pre('save', function capitalizeFields (next) {
  this.name = capitalize(this.name)
  next()
})

function capitalize (name) {
  return name.replace(/\b(\w)/g, s => s.toUpperCase())
}

module.exports = mongoose.model('user', User)
