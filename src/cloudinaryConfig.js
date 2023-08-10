// cloudinaryConfig.js

const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME,
  apiKey: import.meta.env.VITE_APP_CLOUDINARY_API_KEY,
  apiSecret: import.meta.env.VITE_APP_CLOUDINARY_API_SECRET,
};

export default cloudinaryConfig;
