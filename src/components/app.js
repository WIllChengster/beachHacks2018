import React from 'react';
import {Route} from 'react-router-dom';
import '../assets/css/app.css';

import NavBar from './navigation/navBar';
import Matching from './matching';

const App = () => (
    <div>
        <NavBar/>
        <Route path="/matching" component={Matching} />
    </div>
);



export default App;
