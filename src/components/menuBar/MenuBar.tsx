import * as React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Paper from '../paper/Paper';
import logo from '../../logo.svg';


import './MenuBar.scss';

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
                    <Link to="/create-collab" className="MenuBar-list--li-link">Create Collab</Link>
                </li>
                <li className="MenuBar-list--li">
                    <Link  to="/collabs" className="MenuBar-list--li-link">Collabs</Link>
                </li>
            </ul>
            <div className="MenuBar-display">
                <Route exact={true} path="/" component={Home} />
                <Route path="/create-collab" component={Home2} />
                <Route path="/collabs" component={Home} />
            </div>
        </div>
    </Router>
)

const Home = () => (
    <Paper>
        <h1>Ceci est un test</h1>
        <p>Test d'affichage du paper, on devrait avoir un truc plutôt propre normalement</p>
    </Paper>
)

const Home2 = () => (
    <Paper>
        <h1>Ceci est un test2</h1>
        <p>Test d'affichage du paper, on devrait avoir un truc plutôt propre normalement</p>
    </Paper>
)

export default MenuBar;