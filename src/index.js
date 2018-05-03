import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import App from './App';
import Logout from './Logout';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home/:token/:name' exact  component={App} />
        <Route path='/logout' exact  component={Logout} />
    </Switch>
    </Router>, document.getElementById('root'));
registerServiceWorker();
