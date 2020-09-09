import React from 'react';
import styles from './Header.module.scss';
import { Button } from '@material-ui/core';

export const Header: React.FC = () => {
    return (
        <div className={styles.header}> 
            <Button 
                classes={{
                    'root': styles.title,
                    'label': styles.label,
                }} 
                href='#'
            >
                Avenues Law Review
            </Button>
            <Button 
                classes={{
                    'root': styles.navItem
                }} 
                href='#'
            >
                about
            </Button>
            <Button 
                classes={{
                    'root': styles.navItem
                }} 
                href='#'
            >
                submit
            </Button>
        </div>
    )
}