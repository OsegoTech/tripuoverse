import multer from "multer";
import sharp from "sharp";
import expressAsyncHandler from "express-async-handler";


const storage = (folder) => {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `Backend/public/${folder}`);
        },
        filename: function (req, file, cb) {
            const ext = file.mimetype.split("/")[1];
            cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
        },
    });
}

export const upload = multer({storage});

export const resizeUserPhoto = expressAsyncHandler(async (req, res, next) => {
    if (!req.file) return next();

    req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

    await sharp(req.file.path)
        .resize(500, 500)
        .toFormat("jpeg")
        .jpeg({quality: 90})
        .toFile(`Backend/public/images/users/${req.file.filename}`);

    next();
});
