const mongoose = require("mongoose");

const ShippingSchema = new mongoose.Schema(
  {
    trackingCode: {
      type: String,
    },
    title: {
      type: String,
    },
    ////shippers details
    shipperName: {
      type: String,
    },
    shipperPhoneNumber: {
      type: String,
    },
    shipperEmail: {
      type: String,
    },
    shipperAddress: {
      type: String,
    },
    ////receiver details
    receiverName: {
      type: String,
    },
    receiverPhoneNumber: {
      type: String,
    },
    receiverEmail: {
      type: String,
    },
    receiverAddress: {
      type: String,
    },
    ////shipment details
    agentName: {
      type: String,
    },
    typeOfShipment: {
      type: String,
    },
    courier: {
      type: String,
    },
    mode: {
      type: String,
    },
    quantity: {
      type: String,
    },
    totalFreight: {
      type: String,
    },
    carierRefNumber: {
      type: String,
    },
    weight: {
      type: String,
    },
    packages: {
      type: String,
    },
    product: {
      type: String,
    },
    paymentMode: {
      type: String,
    },
    carrier: {
      type: String,
    },
    departureDate: {
      type: String,
    },
    departureTime: {
      type: String,
    },
    destination: {
      type: String,
    },
    pickUpDate: {
      type: String,
    },
    pickUpTime: {
      type: String,
    },
    expectedDeliveryDate: {
      type: String,
    },
    comments: {
      type: String,
    },
    ////status of the product
    statusDate: {
      type: String,
    },
    statusTime: {
      type: String,
    },
    statusLocation: {
      type: String,
    },
    statusNotification: {
      type: String,
    },
    statusComment: {
      type: String,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Shipping", ShippingSchema);
