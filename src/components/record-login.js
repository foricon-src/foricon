export default async function recordLogin(token) {
    await fetch('/api/user/record-login', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
    })
}