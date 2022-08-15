import React from 'react';
import styles from './css/card.module.css'
import './App.css';

export default function Card({ children, className, id}) {
    return (
        <section id={id} className={`${styles.cardSection} ${className}  rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 overflow-y-auto`}>
            {children}
        </section>
    );
    }