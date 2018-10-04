import * as React from 'react';
import './Card.scss';

const Card: React.SFC = (children) => {
    return (
        <div className="Card">
            <div className="Card-children">{children}</div>
        </div>
    )
}

export default Card;