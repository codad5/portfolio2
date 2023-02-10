import { useState } from 'react'

function DropSection({ title , children, expanded = false }) {
    const [count, setCount] = useState(0)
    const ELEMENT_ID = `Collapse${title}`
    return (
        <section className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id={`headingOne${ELEMENT_ID}`}>
                <button className="
        accordion-button
        collapsed   
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target={`#${ELEMENT_ID}`} aria-expanded={expanded}
                    aria-controls={`${ELEMENT_ID}`}>
                    {title}
                </button>
            </h2>
            <div id={ELEMENT_ID} className={`accordion-collapse collapse ${expanded ? 'show' : ''}`} aria-labelledby={`headingOne${ELEMENT_ID}`}
                data-bs-parent="#Main">
                <div className="accordion-body py-4 px-5">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default DropSection
