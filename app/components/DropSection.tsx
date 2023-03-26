// 'use client';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { MouseEvent, useState } from 'react'
import {  isBrowser, isMobile } from 'react-device-detect';
// import { ListenToKey } from '../helpers/keybinder';



function DropSection({ title, children, style, shortcutSwitches, active: default_active = false }: { title: string, children: React.ReactNode, style?:string, shortcutSwitches?: string[], active ?: boolean}) {
  // if (shortcutSwitches) ListenToKey(shortcutSwitches[0], ...shortcutSwitches, () => {
  //   (document.querySelector(`#btn_${title}`) as HTMLButtonElement)?.click()
  // })  
  return (
    <section className={`transition-all accordion-item border bg-white border-gray-200 shrink-0`} data-accordion-default={default_active}>
            {/* <div className="border-0"> */}
                <div className="mb-0 bg-mainblue sticky top-0 z-50" id={`btn_${title}`}>
                    <button className={`relative
                    accordion-btn
                    ${default_active ? 'active' : ''}
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    justify-between
                    text-base text-black text-left
                    bg-mainblue
                    border-0
                    rounded-none       transition font-medium
                focus:outline-none
                  min-h-[10vh]`}>
                    <span className=''>
                      {title} 
                      <sub className='font-light text-xs ml-2'>{isBrowser && shortcutSwitches && false? `Press ${shortcutSwitches?.join(',')} to open/close` : null}</sub>
                    </span>
                    <svg data-accordion-icon className={`w-6 h-6 shrink-0 ${default_active ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                </div>
        <div className={`accordion-body  p-0 m-0 min-h-[50vh] ${style} ${default_active ? '' : 'hidden'}`}>
                    {children}
                </div>
            {/* </div> */}
        </section>
    )
}



export default DropSection
