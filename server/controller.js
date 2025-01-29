//controller.js
const service = require("./service");
const Product = require("./Product");
exports.generateQR = async (req, res) => {
  try {
    const { data } = req.body;
    // Validate price
    if (isNaN(data.price) || data.price <= 0) {
      return res.status(400).send({ error: "Invalid price provided" });
    }
    const newProduct = new Product({
      id: data.id,
      price: parseFloat(data.price),
    });
    await newProduct.save();
    console.log("Product saved to MongoDB:", newProduct);
    const qrCodeText = service.formatData(data);
    const qrCodeBuffer = await service.generateQRCode(qrCodeText);
    res.setHeader("Content-Disposition", "attachment; filename=qrcode.png");
    res.type("image/png").send(qrCodeBuffer);
  } catch (err) {
    console.error("Error generating QR code:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
