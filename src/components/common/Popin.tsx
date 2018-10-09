import * as React from 'react';
import IconButton from './IconButton';

import './Popin.scss';

interface IPopin {
    closePopin: () => void;
}

const Popin: React.SFC<IPopin> = (props) => (
    <div className="Popin">
        <div className="Popin-content">
            <div className="Popin-content--header">
                <IconButton icon="icon-cross" onClick={props.closePopin} />
            </div>
            <div className="Popin-content--bottom">
                {props.children}
            </div>
        </div>
    </div>
)

export default Popin;