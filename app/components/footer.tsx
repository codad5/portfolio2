"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Footer() {
    return (
        <>
        <footer className='w-full h-15 bg-slate-600 text-center text-white p-4'>
                    <div>Designed by <a href='https://github.com/codad5' id="footername" className='underline decoration-dotted font-bold'>Codad5</a></div>
                    <div><Typewriter
                        words={['Eat', 'Sleep', 'Code', 'Repeat!', 'Thanks']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /></div>
                </footer>
                <a className='fixed bottom-10 right-10 z-50' href='#footername'>
                    <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </a>
        </>
    )
}