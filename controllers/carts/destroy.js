import Cart from "../../models/Cart.js";

export default async function (req, res, next) {
  try {
    let query = { user_id: req.user._id };
    let del = await Cart.deleteMany(query);

    if (del) {
      return res.status(200).json({
        success: true,
        response: "Cart removed from user.",
      });
    } else {
      return res.status(404).json({
        success: false,
        response: "Cart is not removed from user.",
      });
    }
  } catch (error) {
    next(error);
  }
}
