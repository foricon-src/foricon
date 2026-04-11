import { v2 as cloudinary } from 'cloudinary';

export function getCloudinary() {
    let config = {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
    }
    console.log(config)
    cloudinary.config(config)
    return cloudinary;
}
export function getFile(publicId) {
    let now = Date.now();
    return `${getCloudinary().url(publicId, {
        resource_type: 'raw',
        type: 'authenticated',
        sign_url: true,
        expires_at: Math.floor(now / 1000) + 300
    })}`
}