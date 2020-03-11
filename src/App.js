import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {routes} from './config/routes';
import Header from './containers/Header'
import classes from './assets/style/style.module.css'
import './assets/style/base.css'

export class PublicRoute extends Component {
    publicAccess(props) {
        const {component: Component} = this.props;
        return <Component {...props} />
    }

    render() {
        return (
            <Route render={props => this.publicAccess(props)}/>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className={classes.main}>
                <Header/>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <Switch>
                            {
                                routes.map((route, i) => (
                                    <PublicRoute key={i} {...route} />
                                ))
                            }
                        </Switch>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
