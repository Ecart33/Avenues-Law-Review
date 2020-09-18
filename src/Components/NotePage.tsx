import React from 'react';
import { Header } from './Header';
import styles from './NotePage.module.scss';
import { Article } from '../App';

//content as object that stores all text and footnotes and what not
interface Footnote {
    content: string,
    leftAlign: boolean,
}


const Citation:React.FC<{footnote: Footnote}> = ({ footnote }) => {
    return (
        <div className={styles.leftCite}>//className={footnote.leftAlign ? styles.leftCite : styles.rightCite}>
            <p>{footnote.content}</p>
        </div>
    )
}

function CiteFormat( footnotes: string[] ) {
    const citations: Footnote[] = footnotes.map((citation, index) => ({content: citation, leftAlign: !!(index % 2) }));
    return citations;
}

export const NotePage:React.FC<{article: Article}> = ({ article }) => {
    
    const citations = CiteFormat(article.footnotes);

    return (
        <div>
            <Header/>
            <div className={styles.articleContainer}>
                {article.text.map( (line, index) => (
                    <div className={''}>
                    <Citation footnote={citations[index]} />
                    </div>
                ))}
            </div>
        </div>
    )
}