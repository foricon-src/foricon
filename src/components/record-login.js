export default async function recordLogin(token) {
    await fetch('/api/user/record-history', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
    })
}