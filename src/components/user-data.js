/**
 * Get default user data object
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @param {string} uid - User's uid
 * @returns User data object
 */
export default function getUserData() {
    let date = getUTC();

    return {
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
        savedIcons: [],
        joiningDate: date,
    }
}