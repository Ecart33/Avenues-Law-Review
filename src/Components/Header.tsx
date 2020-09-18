import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const Header: React.FC = () => {
    return (
        <div className={styles.header}> 
            <Button 
                classes={{
                    'root': styles.title,
                    'label': styles.label,
                }} 
                component={Link}
                to='/'
            >
                Avenues Law Review
            </Button>
            <Button 
                classes={{
                    'root': styles.navItem
                }} 
                component={Link}
                to='/'
            >
                about
            </Button>
            <Button 
                classes={{
                    'root': styles.navItem
                }} 
                component={Link}
                to='/'
            >
                submit
            </Button>
        </div>
    )
}
