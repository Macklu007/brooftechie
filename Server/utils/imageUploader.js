const cloudinary = require("cloudinary").v2;

exports.uploadImageToCloudinary = async (
  file,
  folder,
  height,
  width
) => {
  const options = { folder };

  if (height) options.height = height;
  if (width) options.width = width;

  options.crop = "scale";
  options.resource_type = "auto";
  options.timeout = 60000;

  return await cloudinary.uploader.upload(
    file.tempFilePath,
    options
  );
};
