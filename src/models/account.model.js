const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
      index: true,
    },

    status: {
      type: String,
      enum: {
        values: ["active", "frozen", "inactive"],
        message: "Status must be either active, frozen, or inactive",
      },
      default: "active",
    },

    currency: {
      type: String,
      required: [true, "Currency is required"],
      default: "INR",
    },

    balance: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// One account per user
accountSchema.index({ user: 1 }, { unique: true });

const accountModel = mongoose.model("Account", accountSchema);

module.exports = accountModel;