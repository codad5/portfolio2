'use client';

import Link from 'next/link';

interface ContactInfo {
  label: string;
  value: string;
  link: string;
}

const contactDetails: ContactInfo[] = [
  {
    label: 'Email',
    value: 'aniezeoformic@gmail.com',
    link: 'mailto:aniezeoformic@gmail.com',
  },
  {
    label: 'Phone',
    value: '+234 814 257 2488',
    link: 'tel:+2348142572488',
  },
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/codad5' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chibueze-michael' },
  { name: 'Twitter', url: 'https://twitter.com/codad5_' },
];

export default function Contact() {
  return (
    <section 
      id="contact"
      className="w-full py-12 px-6"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 pb-6">
          <h2 
            className="text-3xl md:text-4xl font-heading font-bold"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            Contact
          </h2>
          <div 
            className="flex-1 h-px"
            style={{ backgroundColor: 'var(--color-border)' }}
          />
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div 
            className="p-6 border"
            style={{ 
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-primary)'
            }}
          >
            <h3 
              className="text-lg font-heading font-bold pb-4"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)'
              }}
            >
              Get in Touch
            </h3>
            <p 
              className="text-sm pb-6"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              I'm open to job opportunities, freelance projects, and collaborations. 
              Feel free to reach out!
            </p>
            <div className="flex flex-col gap-4">
              {contactDetails.map((contact) => (
                <div key={contact.label}>
                  <span 
                    className="text-xs uppercase tracking-wider block pb-1"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {contact.label}
                  </span>
                  <a
                    href={contact.link}
                    className="text-lg"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div 
            className="p-6 border"
            style={{ 
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-primary)'
            }}
          >
            <h3 
              className="text-lg font-heading font-bold pb-4"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)'
              }}
            >
              Follow Me
            </h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border hover:bg-[var(--color-bg-tertiary)] transition-colors no-underline"
                  style={{ 
                    borderColor: 'var(--color-border-light)',
                    color: 'var(--color-text-primary)'
                  }}
                >
                  <span>{social.name}</span>
                  <span style={{ color: 'var(--color-accent)' }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
