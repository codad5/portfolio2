import { MouseEvent, useState } from 'react'

function DropSection({ title, children, expanded = false, style = " " }: { title: string, children: React.ReactNode , expanded?:boolean, style?:string}) {
    const [count, setCount] = useState(0)
    const ELEMENT_ID = `Collapse${title}`
    const showHeroAuto = () => {
        let any_open = false;
        const accordion_bs = document.querySelectorAll('button.accordion-button') as NodeListOf<HTMLButtonElement>
        accordion_bs.forEach(e => {
            if(!e.classList.contains('collapsed')) any_open = true;
        })  
        if(!any_open) accordion_bs[0].click()
    }
    return (
        <section className={`accordion-item border bg-white border-gray-200 shrink-0`}>
            <h2 className="accordion-header mb-0 bg-mainblue sticky top-0 z-50" id={`headingOne${ELEMENT_ID}`}>
                <button className={`
        accordion-button
        collapsed  
        ${expanded ? '' : 'collapsed'}
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-black text-left
        bg-mainblue
        border-0
        rounded-none
        transition
        focus:outline-none
        min-h-[10vh]
      `} type="button" data-bs-toggle="collapse" data-bs-target={`#${ELEMENT_ID}`} aria-expanded={expanded}
                    aria-controls={`${ELEMENT_ID}`} onClick={e => showHeroAuto()}>
                    {title}
                </button>
            </h2>
            <div id={ELEMENT_ID} className={`accordion-collapse collapse ${expanded ? 'show' : ''}`} aria-labelledby={`headingOne${ELEMENT_ID}`}
                data-bs-parent="#Main">
                <div className={`accordion-body  min-h-[50vh] ${style}`}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default DropSection
