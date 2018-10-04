import * as React from 'react';
import './Card.scss';

const Card: React.SFC = (
    props
) => (
        <div className="Card">
            <div className="Card-children">{props.children}</div>
        </div>
    );

export default Card;