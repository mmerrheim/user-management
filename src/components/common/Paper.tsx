import * as React from 'react';
import './Paper.scss';

const Paper: React.SFC = (
    props
) => (
        <div className="Paper">
            <div className="Paper-children">{props.children}</div>
        </div>
    );

export default Paper;