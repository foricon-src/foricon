/**
 * Get default user data object
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @param {string} uid - User's uid
 * @returns User data object
 */
export default function getUserData(name, email, uid) {
    let date = getUTC();

    return {
        avatar: '//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDdMEaj-b8vWZiL6TYKH5XENGyNr-QZZ2BxFdkV-SfNNBPhTOFmuzjxyOJOQvw0e96x40y1UJbHVIjgidnz4CAX0x9wKX5kS7uGJ4ptYhTDRigXfcxiTGK3DBLPR2CEw9eFvGwUqeNRavCIIaJXzveJ7b0UZxGxkOQDmrtAmIp09P6br6tc0tVaqzOS08/s1600/male-01.png',
        name, email, uid,
        settings: {
            allowedDomains: [],
            renderingOption: 'performance',
            versions: [ 'b2' ],
        },
        personalization: {
            font: 'cons',
            indent: 2,
        },
        plan: 'free',
        pageview: {
            start: date,
            count: 0,
        },
        chilzyMusic: {
            liked: [],
            disliked: [],
            playlists: [
                {
                    name: 'saved',
                    tracks: [],
                },
                {
                    name: 'recently listened',
                    tracks: [],
                },
            ],
            following: [],
            settings: {
                theme: 'default',
                preloadTracks: 'disabled',
                visualizer: {
                    enabled: false,
                    opacity: .5,
                    height: 150,
                },
                maximumResults: 20,
                sidebarWidth: 270,
            }
        },
        hub: {
            liked: [],
            notifications: [],
            saved: [],
        },
        joiningDate: date,
    }
}