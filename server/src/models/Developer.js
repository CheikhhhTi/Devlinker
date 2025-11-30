import mongoose from 'mongoose';

const developerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  github: {
    type: String,
    required: true,
    trim: true
  },
  linkedin: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Developer', developerSchema);