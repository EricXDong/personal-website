import { RequestType } from '.';

export default (email: string, message: string) =>
    fetch('/api', {
        method: 'POST',
        body: JSON.stringify({
            type: RequestType.CONTACT,
            data: {
                email,
                message
            }
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
