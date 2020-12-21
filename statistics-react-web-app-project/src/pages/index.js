import React, { useState, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import Sidebar from './Sidebar';
import { Wrap, Main, NavBar } from './styles/styles';

const Dashboard = lazy(() => import('./Dashboard'));
const Tables = lazy(() => import('./Tables'));
const Cards = lazy(() => import('./Cards'));

export default function Sis() {

    const [ drag, setDrag ] = useState(false);
    return (
        <Wrap>
            <Sidebar drag={drag} />
            <Main>
                <NavBar>
                    <FiMenu className="toggle" style={{ marginLeft: drag ? 170 : 0}} onClick={(e) => drag ? setDrag(false) : setDrag(true)} />
                    <span>Covid-19  <span className="name">{ 'Statistics' }</span></span>
                </NavBar>
                <div className="content">
                    <div className="row">
                            <Switch>
                                <Route exact path='/' component={Dashboard} />
                                <Route path='/tables' component={Tables}/>
                                <Route path='/cards' component={Cards}/>
                            </Switch>
                    </div>
                </div>
            </Main>
        </Wrap>
    );
}

