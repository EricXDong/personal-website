import * as React from 'react';

import Image from '../Image';
import Card from '../Card';
import profilePic from '../../img/profile.png';

class Home extends React.Component {
    public render() {
        return (
            <div>
                <Card extraclasses="mr4">
                    <Image src={profilePic} width="300" />
                </Card>
                <Card extraclasses="v-top white w-50">
                    <p>This is some stuff about me</p>
                    <p>
                        This is some more stuff about me. I'm gonna make this one a very long sentence so I can test
                        how things look when they go to new lines.
                    </p>
                </Card>
            </div>
        );
    }
}

export default Home;
