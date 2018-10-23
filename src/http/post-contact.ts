export default (email: string, message: string) =>
    fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
            email,
            message,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        console.log(response + '!');
        return response;
    });
