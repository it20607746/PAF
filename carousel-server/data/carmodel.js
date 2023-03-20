const mongoose= require ("mongoose");
const carouselSchema = new mongoose.Schema({
    title: {
      type: String,
      trim: true
    },
    subtitle: {
      type: String,
      trim: true
    },
    imageURL: {
      type: String,
      trim: true
    },
  });
  
 module.exports = mongoose.model("Carousel", carouselSchema);
  