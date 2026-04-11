import { v2 as cloudinary } from 'cloudinary';

export function getFile(publicId) {
    let now = Date.now();
    return `${cloudinary.url(publicId, {
        resource_type: 'raw',
        type: 'authenticated',
        sign_url: true,
        expires_at: Math.floor(now / 1000) + 300
    })}`
}