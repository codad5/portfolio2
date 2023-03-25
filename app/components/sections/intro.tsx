"use client"

import { animated, useSpring } from "@react-spring/web"
import DropSection from "../DropSection"

export default function Intro()
{
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
    return (
        <DropSection title={"Intro"} active={true}  style={"h-[48vh]"} shortcutSwitches={['H', 'I']}>
            <div className="w-full bg-hero-pattern text-white bg-cover bg-center h-full relative  lg:hover:bg-contain bg-no-repeat transition ease-in-out delay-150 duration-300">
                <div className='text-3xl  absolute  w-8 left-3 bottom-3 left-3 font-semibold' style={{ color: "#fff" }}>
                    <animated.div style={styles}>
                        <h1>Chibueze Michael Aniezeofor</h1>
                    </animated.div>

                </div>
            </div>
        </DropSection>
    )
}