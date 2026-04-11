import { v2 } from 'cloudinary';

v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})
export const cloudinary = v2;
export function getFile(publicId) {
    let now = Date.now();
    return `${cloudinary.url(publicId, {
        resource_type: 'raw',
        type: 'authenticated',
        sign_url: true,
        expires_at: Math.floor(now / 1000) + 300
    })}`
}