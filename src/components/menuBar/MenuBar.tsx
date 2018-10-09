import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Paper from '../common/Paper';

import './MenuBar.scss';
import ManageCollabs from '../page/manageCollabs/ManageCollabs';

export default class MenuBar extends React.Component {

    public update = () => this.forceUpdate();

    public render() {
        return (
            <Router>
                <div className="MenuBar">
                    <ul className="MenuBar-list">
                        <li className="MenuBar-list--li">
                            <Link to="/" onClick={this.update} className={`MenuBar-list--li-link ${window.location.pathname === '/' ? "active" : ""}`}><i className="icon-home3 icon-x" /></Link>
                        </li>
                        <li className="MenuBar-list--li">
                            <Link to="/collabs" onClick={this.update} className={`MenuBar-list--li-link ${window.location.pathname === '/collabs' ? "active" : ""}`}><i className="icon-users icon-x" /></Link>
                        </li>
                    </ul>
                    <div className="MenuBar-display">
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/collabs" component={ManageCollabs} />
                    </div>
                </div>
            </Router>
        );
    }
}

const Home = () => (
    <Paper>
        <h1>Home</h1>
        <p>Test d'affichage du paper, on devrait avoir un truc plutôt propre normalement</p>
    </Paper>
)
