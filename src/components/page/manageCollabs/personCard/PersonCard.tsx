import * as React from 'react';
import Card from '../../../common/Card';
import { IUserEntity } from '../../../../model/Entities';
import './PersonCard.scss';


const PersonCard: React.SFC<{ person: IUserEntity }> = (props) => (
    <Card>
        <div className="PersonCard">
            <div className="PersonCard--person">
                <span className="PersonCard--person-name">{props.person.name}</span>
                <span className="PersonCard--person-age">{props.person.age} ans</span>
            </div>
            <div className="PersonCard--role">
                <span className="PersonCard--role-id">Role</span>
                <span className="PersonCard--role-name">{props.person.role.name}</span>
            </div>
            <div className="PersonCard--service">
                <span className="PersonCard--service-id">Service</span>
                <span className="PersonCard--service-name">{props.person.service.name}</span>
            </div>
        </div>
    </Card>
)

export default PersonCard;