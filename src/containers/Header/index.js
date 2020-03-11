import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from '../../assets/style/style.module.css'

const Index = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <NavLink to="/" className={classes.navItem}>
                        Главная
                    </NavLink>
                    <NavLink to="/settings" className={classes.navItem}>
                        Настройки
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Index;