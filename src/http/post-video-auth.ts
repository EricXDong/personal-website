export default (password: string) =>
    fetch('/api/videos', {
        method: 'POST',
        body: JSON.stringify({ password }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
