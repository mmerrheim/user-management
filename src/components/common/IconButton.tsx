import * as React from 'react';
import './IconButton.scss';

interface IconButton {
    icon: string;
    className?: string;
    onClick: () => void;
}

const IconButton: React.SFC<IconButton> = (
    props,
) => (
        <div className={`IconButton ${props.className}`} onClick={props.onClick}>
            <i className={`IconButton-icon ${props.icon}`} />
        </div>
    )

export default IconButton;