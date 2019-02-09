import { RequestType } from '.';

export default (password: string) =>
    fetch('/api', {
        method: 'POST',
        body: JSON.stringify({
            type: RequestType.VIDEOS,
            data: {
                password,
            },
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
