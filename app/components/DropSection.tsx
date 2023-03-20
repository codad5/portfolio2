'use client';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { MouseEvent, useState } from 'react'
import {  isBrowser, isMobile } from 'react-device-detect';



function DropSection({ title, children, style,expanded = true, onClick = () => { }, shortcutSwitches }: { title: string, children: React.ReactNode, style?:string, expanded: boolean, onClick?: (e: MouseEvent<HTMLButtonElement>) => void, shortcutSwitches?: string[], }) {
    return (
        <section className={`accordion-item border bg-white border-gray-200 shrink-0`}>
            <Accordion open={expanded} className="border-0">
                <AccordionHeader onClick={(e) => onClick(e)} className="mb-0 bg-mainblue sticky top-0 z-50" id={`btn_${title}`}>
                    <button className='relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-black text-left
        bg-mainblue
        border-0
        rounded-none       transition font-medium
     focus:outline-none
      min-h-[10vh]'>{title} <sub className='font-light text-xs ml-2'>{isBrowser && shortcutSwitches ? `Press ${shortcutSwitches.join(',')} to ${!expanded ? 'open' : 'close'}` : null}</sub> </button>
                </AccordionHeader>
                <AccordionBody className={`accordion-body  p-0 m-0 min-h-[50vh] ${style}`}>
                    {children}
                </AccordionBody>
            </Accordion>
        </section>
    )
}
export default DropSection
