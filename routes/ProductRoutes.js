const Shipping = require("../models/Shipping");

const router = require("express").Router();

// /registerin

router.post("/", async (req, res) => {
  const {
    trackingCode,
    title,
    shipperName,
    shipperPhoneNumber,
    shipperEmail,
    shipperAddress,
    receiverName,
    receiverPhoneNumber,
    receiverEmail,
    receiverAddress,
    agentName,
    typeOfShipment,
    courier,
    mode,
    quantity,
    totalFreight,
    carierRefNumber,
    weight,
    packages,
    product,
    paymentMode,
    carrier,
    departureDate,
    departureTime,
    destination,
    pickUpDate,
    pickUpTime,
    expectedDeliveryDate,
    comments,
    statusDate,
    statusTime,
    statusLocation,
    statusNotification,
    statusComment,
  } = req.body;

  try {
    const existingProduct = await Shipping.findOne({
      trackingCode,
    });

    if (existingProduct) {
      return res
        .status(409)
        .json({ error: "Product already exists from our store." });
    }
    //create new user

    const newShipping = new Shipping({
      trackingCode: trackingCode,
      title: title,
      shipperName: shipperName,
      shipperPhoneNumber: shipperPhoneNumber,
      shipperEmail: shipperEmail,
      shipperAddress: shipperAddress,
      receiverName: receiverName,
      receiverPhoneNumber: receiverPhoneNumber,
      receiverEmail: receiverEmail,
      receiverAddress: receiverAddress,
      agentName: agentName,
      typeOfShipment: typeOfShipment,
      courier: courier,
      mode: mode,
      quantity: quantity,
      totalFreight: totalFreight,
      carierRefNumber: carierRefNumber,
      weight: weight,
      packages: packages,
      product: product,
      paymentMode: paymentMode,
      carrier: carrier,
      departureDate: departureDate,
      departureTime: departureTime,
      destination: destination,
      pickUpDate: pickUpDate,
      pickUpTime: pickUpTime,
      expectedDeliveryDate: expectedDeliveryDate,
      comments: comments,
      statusDate: statusDate,
      statusTime: statusTime,
      statusLocation: statusLocation,
      statusNotification: statusNotification,
      statusComment: statusComment,
    });

    const delivery = await newShipping.save();

    res.status(200).json({
      _id: delivery._id,

      trackingCode: delivery.trackingCode,
      title: delivery.title,
      shipperName: delivery.shipperName,
      shipperPhoneNumber: delivery.shipperPhoneNumber,
      shipperEmail: delivery.shipperEmail,
      shipperAddress: delivery.shipperAddress,
      receiverName: delivery.receiverName,
      receiverPhoneNumber: delivery.receiverPhoneNumber,
      receiverEmail: delivery.receiverEmail,
      receiverAddress: delivery.receiverAddress,
      agentName: delivery.agentName,
      typeOfShipment: delivery.typeOfShipment,
      courier: delivery.courier,
      mode: delivery.mode,
      quantity: delivery.quantity,
      totalFreight: delivery.totalFreight,
      carierRefNumber: delivery.carierRefNumber,
      weight: delivery.weight,
      packages: delivery.packages,
      product: delivery.product,
      paymentMode: delivery.paymentMode,
      carrier: delivery.carrier,
      departureDate: delivery.departureDate,
      departureTime: delivery.departureTime,
      destination: delivery.destination,
      pickUpDate: delivery.pickUpDate,
      pickUpTime: delivery.pickUpTime,
      expectedDeliveryDate: delivery.expectedDeliveryDate,
      comments: delivery.comments,
      statusDate: delivery.statusDate,
      statusTime: delivery.statusTime,
      statusLocation: delivery.statusLocation,
      statusNotification: delivery.statusNotification,
      statusComment: delivery.statusComment,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/", async (req, res) => {
  try {
    const classes = await Shipping.find({}).sort({ createdAt: -1 });

    res.json(classes);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const classes = await Shipping.findById(req.params.id);

    res.status(200).json(classes);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/track/:trackingCode", async (req, res) => {
  const trackNumber = req.params.trackingCode;
  try {
    const classes = await Shipping.findOne({
      trackingCode: trackNumber,
    });

    res.status(200).json(classes);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const classes = await Shipping.findByIdAndDelete(req.params.id);
    if (classes) {
      res.status(200).json({ message: "This Product has been deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const {
    trackingCode,
    title,
    shipperName,
    shipperPhoneNumber,
    shipperEmail,
    shipperAddress,
    receiverName,
    receiverPhoneNumber,
    receiverEmail,
    receiverAddress,
    agentName,
    typeOfShipment,
    courier,
    mode,
    quantity,
    totalFreight,
    carierRefNumber,
    weight,
    packages,
    product,
    paymentMode,
    carrier,
    departureDate,
    departureTime,
    destination,
    pickUpDate,
    pickUpTime,
    expectedDeliveryDate,
    comments,
    statusDate,
    statusTime,
    statusLocation,
    statusNotification,
    statusComment,
  } = req.body;
  try {
    const classes = await Shipping.findById(id);

    if (!classes) {
      return res.status(404).json({ message: "Class not found" });
    }

    // Update the user's current class

    classes.trackingCode = trackingCode || classes.trackingCode;
    classes.title = title || classes.title;
    classes.shipperName = shipperName || classes.shipperName;
    classes.shipperPhoneNumber =
      shipperPhoneNumber || classes.shipperPhoneNumber;
    classes.shipperEmail = shipperEmail || classes.shipperEmail;
    classes.shipperAddress = shipperAddress || classes.shipperAddress;
    classes.receiverName = receiverName || classes.receiverName;
    classes.receiverPhoneNumber =
      receiverPhoneNumber || classes.receiverPhoneNumber;
    classes.receiverEmail = receiverEmail || classes.receiverEmail;
    classes.receiverAddress = receiverAddress || classes.receiverAddress;
    classes.agentName = agentName || classes.agentName;
    classes.typeOfShipment = typeOfShipment || classes.typeOfShipment;
    classes.courier = courier || classes.courier;
    classes.mode = mode || classes.mode;
    classes.quantity = quantity || classes.quantity;
    classes.totalFreight = totalFreight || classes.totalFreight;
    classes.carierRefNumber = carierRefNumber || classes.carierRefNumber;
    classes.weight = weight || classes.weight;
    classes.packages = packages || classes.packages;
    classes.product = product || classes.product;
    classes.paymentMode = paymentMode || classes.paymentMode;
    classes.carrier = carrier || classes.carrier;
    classes.departureDate = departureDate || classes.departureDate;
    classes.departureTime = departureTime || classes.departureTime;
    classes.destination = destination || classes.destination;
    classes.pickUpDate = pickUpDate || classes.pickUpDate;
    classes.pickUpTime = pickUpTime || classes.pickUpTime;
    classes.expectedDeliveryDate =
      expectedDeliveryDate || classes.expectedDeliveryDate;
    classes.comments = comments || classes.comments;
    classes.statusDate = statusDate || classes.statusDate;
    classes.statusTime = statusTime || classes.statusTime;
    classes.statusLocation = statusLocation || classes.statusLocation;
    classes.statusNotification =
      statusNotification || classes.statusNotification;
    classes.statusComment = statusComment || classes.statusComment;
    await classes.save();

    res.json({ message: "Product updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
