import { cloudinary } from './cloudinary';

export async function getMedia(uid) {
    let files = await cloudinary.search
        .expression(`folder:users/${uid}`)
        .with_field('context')
        .max_results(100)
        .execute();

    let { used } = (await fs.collection('quota').doc(uid).get()).data();
    
    return { used, files: files.resources };
}