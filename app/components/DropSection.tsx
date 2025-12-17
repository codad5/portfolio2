'use client';
import { isBrowser } from 'react-device-detect';

interface DropSectionProps {
  title: string;
  display_title?: string;
  children: React.ReactNode;
  style?: string;
  shortcutSwitches?: string[];
  active?: boolean;
}

function DropSection({ 
  title, 
  display_title, 
  children, 
  style, 
  shortcutSwitches, 
  active: default_active = false 
}: DropSectionProps) {
  return (
    <section 
      className="transition-all accordion-item border border-[var(--color-border)] shrink-0"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
      data-accordion-default={default_active}
    >
      <div 
        className="sticky top-0 z-50" 
        id={`btn_${title}`}
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <button 
          className={`
            relative
            accordion-btn
            ${default_active ? 'active' : ''}
            flex
            items-center
            w-full
            py-4
            px-5
            justify-between
            text-base text-left
            border-0
            rounded-none
            transition
            font-medium
            focus:outline-none
            min-h-[10vh]
          `}
          style={{ 
            backgroundColor: 'var(--color-bg-secondary)',
            color: 'var(--color-text-primary)'
          }}
        >
          <span>
            <h2 className='inline font-heading'>
              {title + (display_title ? ` : ${display_title}` : '')}
            </h2>
            <sub className='font-light text-xs ml-2' style={{ color: 'var(--color-text-muted)' }}>
              {isBrowser && shortcutSwitches && false ? `Press ${shortcutSwitches?.join(',')} to open/close` : null}
            </sub>
          </span>
          <svg 
            data-accordion-icon 
            className={`w-6 h-6 shrink-0 ${default_active ? 'rotate-180' : ''}`} 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div 
        className={`accordion-body p-0 min-h-[50vh] ${style || ''} ${default_active ? '' : 'hidden'}`}
        style={{ backgroundColor: 'var(--color-bg-primary)' }}
      >
        {children}
      </div>
    </section>
  );
}

export default DropSection;
