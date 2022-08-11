import React from 'react';
import styles from './css/card.module.css'
import './App.css';

export default function Card({ children, className}) {
    return (
        <section className={`${styles.cardSection} ${className}`}>
            <div className={`${styles.cardBody}`}>
            {children}
        </div>
        </section>
    );
    }