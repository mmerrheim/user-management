import * as React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Paper from '../paper/Paper';
import logo from '../../logo.svg';


import './MenuBar.scss';
import UserPage from '../page/userPage/UserPage';

const MenuBar = () => (
    <Router>
        <div className="MenuBar">
            <ul className="MenuBar-list">
                <li className="MenuBar-list--li">
                    <img src={logo} className="MenuBar-list--li-logo" alt="logo" />
                </li>
                <li className="MenuBar-list--li">
                    <Link to="/" className="MenuBar-list--li-link">Home</Link>
                </li>
                <li className="MenuBar-list--li">
                    <Link to="/create-collab" className="MenuBar-list--li-link">Create Collaborator</Link>
                </li>
                <li className="MenuBar-list--li">
                    <Link  to="/collabs" className="MenuBar-list--li-link">Manage Collaborators</Link>
                </li>
            </ul>
            <div className="MenuBar-display">
                <Route exact={true} path="/" component={Home} />
                <Route path="/create-collab" component={UserPage} />
                <Route path="/collabs" component={Home2} />
            </div>
        </div>
    </Router>
)

const Home = () => (
    <Paper>
        <h1>Home</h1>
        <p>Test d'affichage du paper, on devrait avoir un truc plutôt propre normalement</p>
    </Paper>
)

const Home2 = () => (
    <Paper>
        <h1>Manage Collaborators</h1>
        <p>Test d'affichage du paper, on devrait avoir un truc plutôt propre normalement</p>
    </Paper>
)

export default MenuBar;