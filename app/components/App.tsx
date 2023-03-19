"use client";
import { ReactHTMLElement, SetStateAction, useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import GithubLogo from '../assets/Github.svg'
import LinkedinLogo from '../assets/Linkedin.svg'
import TwitterLogo from '../assets/Twitter.svg'
import '../globals.css'
import DropSection from './DropSection'
import ProjectCard from './ProjectCard'
import { contactsType, projectsDetails } from './types'
import { Typewriter } from 'react-simple-typewriter'
import { projects } from './projects'
import Keybinder from 'domkeybinder'
import { animated, useSpring } from '@react-spring/web'
import WorkCard from './Wordcard'
//import next image
import Image from 'next/image'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Link from 'next/link';
import Footer from './footer';

const keyController = new Keybinder({
    default_listener: 'keyup',
    element: window,
    allow_default: false
})



function App({posts}: {posts: string[]}) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // short cut to open intro drop section
        keyController.ListenToKey('H', 'I', () => {
            (document.querySelector('#btn_Intro') as HTMLButtonElement)?.click();
        })
            // for About section
            .ListenToKey('A', () => {
                (document.querySelector('#btn_About') as HTMLButtonElement)?.click();
            })
            // for Projects section
            .ListenToKey('P', () => {
                (document.querySelector('#btn_Projects') as HTMLButtonElement)?.click();
            })
            // for Blog section
            .ListenToKey('W', () => {
                (document.querySelector('#btn_Work') as HTMLButtonElement)?.click();
            })
            // for Blog section
            .ListenToKey('B', () => {
                (document.querySelector('#btn_Blog') as HTMLButtonElement)?.click();
            })
            // for Contact section
            .ListenToKey('C', '/', () => {
                (document.querySelector('#btn_Contact') as HTMLButtonElement)?.click();
            })


    }, [])
    const contactsText: contactsType[] = [
        {
            label: "Email",
            value: "Aniezeoformic@gmail.com",
            link: "mailto:aniezeoformic@gmail.com"
        },
        {
            label: "Phone",
            value: "+234(0)8142572488",
            link: "tel:+2348142572488"
        }
    ]

    const contactLogo: contactsType[] = [
        {
            label: "Github",
            value: GithubLogo,
            link: "https://github.com/codad5"
        },
        {
            label: "Twitter",
            value: TwitterLogo,
            link: "https://twitter.com/codad5_"
        },
        {
            label: "Linkedin",
            value: LinkedinLogo,
            link: "https://www.linkedin.com/in/chibueze-aniezeofor/"
        }
    ]

    const styles = useSpring({
        from: {
            opacity: 0,
            y: 124,
        },
        to: {
            opacity: 1,
            y: 0,
        }
    })

    const [open, setOpen] = useState(1);

    const handleOpen = (value: SetStateAction<number>) => {
        setOpen(open === value ? 0 : value);
    };


    return (
        <div className="App w-full h-screen">
            <div className="accordion h-full w-full flex flex-col relative" id="Main">
                <DropSection title={"Intro"} expanded={open == 1} onClick={() => handleOpen(1)} style={"h-[48vh]"} shortcutSwitches={['H', 'I']}>
                    <div className="w-full bg-hero-pattern text-white bg-cover bg-center h-full relative  lg:hover:bg-contain bg-no-repeat transition ease-in-out delay-150 duration-300">
                        <div className='text-3xl  absolute  w-8 left-3 bottom-3 left-3 font-semibold' style={{ color: "#fff" }}>
                            <animated.div style={styles}>
                                <h1>Chibueze Michael Aniezeofor</h1>
                            </animated.div>

                        </div>
                    </div>
                </DropSection>
                <DropSection title={"About"} expanded={open == 2} onClick={() => handleOpen(2)} shortcutSwitches={['A']}>
                    <div className='w-full py-4 px-5'>
                        <article className="w-full text-sm p-6 pt-0 leading-6 scroll-smooth">
                            <p>
                                Hola!, I am <span className="font-black underline decoration-dotted">Chibueze Michael Aniezeofor</span> ,a mechanical engineering student at the <span className="font-bold underline decoration-dotted">University of Nigeria</span> who is passionate about software development.I have a strong passion for learning about new technologies, and I am always looking for new ways to improve my skills.
                                During my years of experience, I have developed a <span className="font-bold underline decoration-dotted">nucleus energy</span> towards <span className="font-bold">backend technologies</span>, a strong understanding of the software development process, and have gained valuable experience in the field of software development.

                            </p>
                            <p>Aside from my passion for software development, I aspire to create innovations that benefit the people of Earth or possibly aliens (if they exist). </p>
                            <br />
                            <p>
                                Due to the force of attraction between the  <span className="font-bold underline decoration-dotted">nucleus (ME)</span> and my <span className="font-bold">my first level  eletrons  (backend  development)</span>,  I consider myself a <span className="font-bold underline decoration-dotted">backend  developer</span> although i also learn technologies outside my field.
                                Below are the technologies I have worked with.
                            </p>
                            <div className="w-full font-bold text-lg pt-3">Backend</div>
                            <ul className="list-disc p-6 pt-2 pb-2">
                                <li>PHP</li>
                                <li>JAVASCRIPT</li>
                                <li>TYPESCRIPT</li>
                                <li>NODE.JS</li>
                                <li>Express.js</li>
                                <li>Laravel</li>
                                <li>Rust ( Currently learning )</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>Unit Testing</li>
                            </ul>
                            <div className="w-full font-bold text-lg pt-3">Frontend & Others</div>
                            <ul className="list-disc p-6 pt-2 " style={{ maxHeight: '20%' }}>
                                <li>React.js</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap & Tailwind Css</li>
                                <li>Redis</li>
                                <li>Git & Github</li>
                                <li>OOPs</li>
                                <li>CI/CD</li>
                            </ul>
                        </article>

                    </div>
                </DropSection>
                <DropSection title={"Projects"} expanded={open == 3} onClick={() => handleOpen(3)} shortcutSwitches={['P']}>
                    <div className='w-full py-[60px] px-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center justify-center items-center place-items-center'>
                        {
                            projects.length > 0 ? projects.map((value, index) => (
                                <ProjectCard key={index} name={value.name} tags={value.tags} main_lang={value.main_lang} links={value.links} type={value.type} image={value.image}>
                                    {value.children}
                                </ProjectCard>
                            )) : <h2> No project</h2>
                        }
                    </div>
                </DropSection>
                <DropSection title={"Work"} expanded={open == 4} onClick={() => handleOpen(4)} shortcutSwitches={['W']}>
                    <div className='w-full p-3 text-center py-5'>
                        <a className='inline-block bg-black text-white p-3  border-double border-4 border-white lg:min-w-[350px]' href='https://drive.google.com/file/d/1gxWPkOWZy0_DG0wKZkn_GvdtCeKYOABO/view?usp=sharing'>SEE MY RESUME</a>
                    </div>
                    <div className='w-full text-center p-3 flex flex-col place-items-center justify-center gap-3 py-6'>
                        <WorkCard title='Sanctablog.com' timeline='Jan 2022 - Dec 2022' position='Web developer' href='https://sanctablog.com'>
                            <ul className='list-disc'>
                                <li>I build and manage the website domain</li>
                                <li>I created and manage the professional email</li>
                            </ul>
                        </WorkCard>
                        <WorkCard title='Listmining.com' timeline='Sept 2021 - Feb 2022' position='Web developer' href='https://listmining.com'>
                            <ul className='list-disc'>
                                <li>I build and manage the website domain</li>
                            </ul>
                        </WorkCard>
                    </div>
                </DropSection>
                <DropSection title={"Blog"} expanded={open == 5} onClick={() => handleOpen(5)} shortcutSwitches={['B']}>
                    <div className='w-full grid place-items-center h-[50vh]'>
                        <b className='text-3xl'>
                            {
                                posts.length > 0 ? posts.map((value, index) => (
                                    <div key={index}>
                                        <Link href={`/posts/${value}`} className='underline decoration-dotted'>{value}</Link>
                                    </div>
                                )) : <h2> No post</h2>
                            }
                        </b>
                    </div>
                </DropSection>
                <DropSection title={"Contact"} style={"min-h-[40vh]"} expanded={open == 6} onClick={() => handleOpen(6)} shortcutSwitches={['C']}>
                    <div className='w-full'>
                        {
                            contactsText.map((element, index) => (
                                <div className='p-5' key={index}>
                                    <div className='w-full text-center space-y-2'>
                                        <label htmlFor={`#${element.label}`} className='font-bold w-4/5 inline-block text-left underline text-2xl'>{element.label}:</label>
                                        <a href={element.link} id={element.label} className='font-semibold w-4/5 inline-block text-left underline decoration-dotted'>{element.value}</a>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='w-full p-5 text-center space-x-10'>
                            {
                                contactLogo.map((values, index) => (
                                    <div className='w-auto h-auto  inline-block text-center' title={values.label} key={index}>
                                        <Link href={values.link}><Image alt={`codad5 ${values.label}`} src={values.value} /></Link>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </DropSection>
                <Footer />
            </div>
        </div>
    )
}

export default App
