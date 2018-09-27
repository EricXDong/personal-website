import * as React from 'react';

import { TransitionProps } from '../../const/transition';

type VideosProps = TransitionProps;

interface Video {
    src: string;
    title: string;
    description: string;
}

interface VideosState {
    videos: Video[];
}

class Videos extends React.Component<VideosProps, VideosState> {
    constructor(props: VideosProps) {
        super(props);
        this.state = {
            videos: [
                {
                    src: 'https://www.youtube.com/embed/958Hn9BMMeM?rel=0',
                    title: 'blah',
                    description: 'blah',
                },
            ],
        };
    }

    public render() {
        return (
            <div>
                {this.state.videos.map(video => (
                    <iframe width="560" height="315" src={video.src} frameBorder="0" allowFullScreen={true} />
                ))}
            </div>
        );
    }
}

export default Videos;
