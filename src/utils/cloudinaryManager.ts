import cloudinary from 'cloudinary'
import fs from 'fs/promises'

cloudinary.v2.config({
    cloud_name: process.env.CLOUDING_CLOUD_NAME,
    api_key: process.env.CLOUDING_API_KEY,
    api_secret: process.env.CLOUDING_API_SECRET,
});

const uploadOnCloudinary = async (uploadFile: string) => {

    try {
        if (!uploadFile) return null;
        const response = await cloudinary.v2.uploader.upload(uploadFile, {
            resource_type: "auto",
        })
        fs.unlink(uploadFile)
        return response;
    } catch (error) {
        fs.unlink(uploadFile)
        return null;
    }
};
export default uploadOnCloudinary