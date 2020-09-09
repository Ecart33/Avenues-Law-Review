import React from 'react';
import styles from './Card.module.scss'

export const Card: React.FC<{title: string, subtitle: string, author: string, tags: string[]}> = ({ title, subtitle, author, tags }) => {
    return (
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
            <div className={styles.tags}>
                {tags.map(t => <p>{t}</p>)}
            </div>
        </div>
    )
}
