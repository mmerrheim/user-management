import * as React from 'react';

import './Paper.scss';

const Paper: React.SFC = ({
    children
}) => {
    return (
        <div className="Paper">
            <div className="Paper-children">{children}</div>
        </div>
    );
}

export default Paper;