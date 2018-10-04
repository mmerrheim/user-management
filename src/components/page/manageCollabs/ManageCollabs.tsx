import * as React from 'react';
import Paper from '../../common/Paper';
import PersonCard from './personCard/PersonCard';
import { IUserEntity } from '../../../model/Entities';
import './ManageCollabs.scss';
import IconButton from '../../common/IconButton';

const personTest: IUserEntity[] = [
    {
        id: 0,
        name: 'Pierre',
        age: 20,
        service: { id: 0, name: 'Front' },
        role: { id: 0, name: 'dev' }
    },
    {
        id: 1,
        name: 'Gilles',
        age: 35,
        service: { id: 0, name: 'Front' },
        role: { id: 1, name: 'manager' }
    },
    {
        id: 2,
        name: 'Francis',
        age: 40,
        service: { id: 1, name: 'Back' },
        role: { id: 0, name: 'dev' }
    },
    {
        id: 3,
        name: 'Jules',
        age: 24,
        service: { id: 1, name: 'Back' },
        role: { id: 1, name: 'manager' }
    },
    {
        id: 4,
        name: 'Pierre',
        age: 18,
        service: { id: 2, name: 'UX' },
        role: { id: 2, name: 'stage' }
    },
    {
        id: 5,
        name: 'Pierre',
        age: 35,
        service: { id: 3, name: 'UI' },
        role: { id: 1, name: 'manager' }
    },
];

export default class ManageCollabs extends React.Component {

    public render() {
        return (
            <Paper>
                <div className="ManageCollabs">
                    <h1>Manage Collaborators</h1>
                    <div className="ManageCollabs--plus">
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <IconButton icon="icon-plus" onClick={() => null} />
                    </div>
                    <div className="ManageCollabs--list">
                        {personTest.map(item => (
                            <div className="ManageCollabs--list-item">
                                <PersonCard key={item.id} person={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </Paper>
        );
    }
}
