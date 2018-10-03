import * as React from 'react';

import './Paper.scss';

const Paper: React.SFC = ({
    children
}) => {
    return (
        <div className="Paper">
            {children}
        </div>
    );
}

export default Paper;