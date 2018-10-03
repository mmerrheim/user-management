import * as React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Paper from '../paper/Paper';

import './MenuBar.scss';

const MenuBar = () => (
    <Router>
        <div className="MenuBar">
            <ul className="MenuBar-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create-collab">Create Collab</Link>
                </li>
                <li>
                    <Link to="/collabs">Collabs</Link>
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