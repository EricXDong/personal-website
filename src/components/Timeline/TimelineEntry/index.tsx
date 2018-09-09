import * as React from 'react';

interface TimelineEntryProps {
    icon?: string;
    children?: React.ReactNode | React.ReactNode[];
    expandOnHover?: boolean;
}

export default class TimelineEntry extends React.Component<TimelineEntryProps> {
    public static defaultProps: TimelineEntryProps = {
        icon: '',
        children: null,
        expandOnHover: true,
    };

    public render() {
        return null;
    }
}
