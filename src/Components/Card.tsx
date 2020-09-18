import React from 'react';
import styles from './Card.module.scss'
import { Link } from 'react-router-dom';

export const Card: React.FC<{title: string, subtitle: string, author: string}> = ({ title, subtitle, author }) => {
    return (
        <Link to={`/notes/${btoa(title)}`}>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    {title}
                </h1>
                <p className={styles.subtitle}>
                    {subtitle}
                </p>
                <p className={styles.author}>
                    {author}
                </p>
            </div>
        </Link>
    )
}
 