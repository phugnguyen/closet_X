import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import Main from './main/Main';

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={Main} />
    </Switch>
);

export default App;