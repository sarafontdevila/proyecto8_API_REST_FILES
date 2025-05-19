const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

/*const getFolder = () => {
  return process.env.CLOUDINARY_FOLDER || "proyecto8"; 
};

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => ({
    folder: getFolder(), 
    allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
  }),
});*/

/*const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Proyecto8",
    allowedFormats: ["jpg", "png", "jpeg", "gif","webp"],
},
});*/
const getDefaultFolder = () => {
  return process.env.CLOUDINARY_FOLDER || "proyecto8";
};

const createStorage = (folderName) => {
  const folder = folderName || getDefaultFolder();

  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => ({
      folder: folder,
      allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
    }),
  });
};
/*const upload = multer({ storage });*/
const upload = multer({ storage: createStorage("differentFolder") });
module.exports = upload