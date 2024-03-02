import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: Number,
  location: String,
  address: String,
  images: [String], // Assuming multiple images as an array of strings (URLs)
  createdAt: {
    type: Date,
    default: Date.now,
  },
  propertyDetails: {
    rooms: Number,
    baths: Number,
    areaSqft: Number,
  },
  status: {
    type: String,
    enum: ['available', 'pending', 'sold'],
    default: 'available',
  },
  yearBuilt: Number,
  featured: {
    type: Boolean,
    default: false,
  },
mapLocation: String,
  listingType: {
    type: String,
    enum: ['sale', 'rent'],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  userId: { // Adding the userid field
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

let Property;
try {
  Property = mongoose.model('Property');
} catch {
  Property = mongoose.model('Property', propertySchema);
}

export default Property;
