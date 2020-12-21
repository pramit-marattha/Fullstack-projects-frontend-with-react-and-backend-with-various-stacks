import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import store from '~/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '~/styles/App.css';


const Allpages = lazy(() => import('../pages'));

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
            <Component {...props} />
    )} />
);



export default function Routes(){

    return (
        <Router>
            <Suspense fallback={
                <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center'}}>
                    <div className="loader"></div>
                </div>
            }>
                <Switch>
                    <Provider store={store}>
                        <PrivateRoute path="/" component={Allpages}/>
                    </Provider>
                </Switch>
            </Suspense>
        </Router>
    );
}


