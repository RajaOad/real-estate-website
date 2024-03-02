import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
  backgroundImage: {
    type: String,
  },
  links: {
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  bio: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  whatsapp: {
    type: String,
  },
  headline: {
    type: String,
  },
  properties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
  }],
  admin: {
    type: Boolean,
    default: false,
  }
});

let User;
try {
  User = mongoose.model('User');
} catch {
  User = mongoose.model('User', userSchema);
}

export default User;
