import * as React from 'react';
import { ClickAwayListener, Tooltip } from '@material-ui/core';

interface NavItemWithTooltipProps {
    message: string;
    children: React.ReactElement<any>;
}

const NavItemWithTooltip: React.SFC<NavItemWithTooltipProps> = ({ message, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleTooltip = (open: boolean) => () => setIsOpen(open);

    return (
        <ClickAwayListener onClickAway={toggleTooltip(false)}>
            <Tooltip
                onClose={toggleTooltip(false)}
                open={isOpen}
                title={message}
                classes={{
                    popper: 'ml5',
                }}
                placement="right"
            >
                <div onClick={toggleTooltip(true)}>{children}</div>
            </Tooltip>
        </ClickAwayListener>
    );
};

export default NavItemWithTooltip;
