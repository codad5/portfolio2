"use client"
import { useEffect } from "react"

export const LoadAccordion = () => {
    // load only when react component is mounted
    
    const accordion_cnts = document.querySelectorAll('.accordion-main')
    accordion_cnts.forEach((accordion_cnt) => {
        //each accordion would have a button and a div
        const accordions = accordion_cnt.querySelectorAll('.accordion-item')
        const default_open = accordion_cnt.querySelector('[data-accordion-default="true"]')
        accordions.forEach((accordion) => {
            const accordion_btn = accordion.querySelector('.accordion-btn')
            const accordion_body = accordion.querySelector('.accordion-body')
            const icon = accordion.querySelector('[data-accordion-icon]')
            // on load close all accordions except the first one
            if (accordion_btn?.classList.contains('active')) {
                accordion_body?.classList.remove('hidden')
            } else {
                accordion_body?.classList.add('hidden')
            }
            // on click of the accordion button
            accordion_btn?.addEventListener('click', () => {
                if (accordion_btn?.classList.contains('active'))
                {
                    accordion_btn?.classList.remove('active')
                    accordion_body?.classList.remove('show')
                    accordion_body?.classList.add('hidden')
                    icon?.classList.remove('rotate-180')
                    if (accordion_btn != default_open?.querySelector('.accordion-btn')){
                        (default_open?.querySelector('.accordion-btn') as HTMLButtonElement)?.click();
                    }
                    return;
                }
                //close other open accordions
                accordions.forEach((accordion) => {
                    const accordion_btn = accordion.querySelector('.accordion-btn')
                    const accordion_body = accordion.querySelector('.accordion-body')
                    const icon = accordion.querySelector('[data-accordion-icon]')
                    accordion_btn?.classList.remove('active')
                    accordion_body?.classList.remove('show')
                    // use tailwind css classes to show and hide the accordion
                    accordion_body?.classList.add('hidden')
                    icon?.classList.remove('rotate-180')
                })
                //using tailwind css classes to show and hide the accordion
                accordion_body?.classList.remove('hidden')
                accordion_btn?.classList.add('active')
                accordion_body?.classList.toggle('show')
                icon?.classList.toggle('rotate-180')
            })
        })
    })
}

export default function AccordionLoader()
{
    useEffect(() => LoadAccordion(), [])
    return null
}