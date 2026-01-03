'use client';

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
  { name: 'GitHub', abbr: 'Gh', url: 'https://github.com/codad5' },
  { name: 'LinkedIn', abbr: 'Li', url: 'https://www.linkedin.com/in/chibueze-michael' },
  { name: 'Twitter', abbr: 'Tw', url: 'https://twitter.com/codad5_' },
];

export default function Contact() {
  return (
    <section 
      id="contact"
      className="w-full px-6 lg:px-12 py-16 lg:py-24"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        
        {/* Centered heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            Let's Work<br/>
            <span style={{ fontStyle: 'italic' }}>Together</span>
          </h2>
          <p 
            className="text-lg max-w-md"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            I'm open to job opportunities, freelance projects, and collaborations. 
            Feel free to reach out!
          </p>
        </div>
        
        {/* Big CTA Button */}
        <a 
          href="mailto:aniezeoformic@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg no-underline transition-all"
          style={{ 
            backgroundColor: 'var(--color-accent)',
            color: '#fff'
          }}
        >
          Say Hello 👋
        </a>
        
        {/* Contact Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info Card */}
          <div 
            className="flex flex-col gap-6 p-8 rounded-2xl"
            style={{ 
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)'
            }}
          >
            <h3 
              className="text-xl"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)'
              }}
            >
              Get in Touch
            </h3>
            <div className="flex flex-col gap-4">
              {contactDetails.map((contact) => (
                <div 
                  key={contact.label}
                  className="flex flex-col gap-1"
                >
                  <span 
                    className="text-xs uppercase tracking-wider"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {contact.label}
                  </span>
                  <a
                    href={contact.link}
                    className="text-lg no-underline"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social Links Card */}
          <div 
            className="flex flex-col gap-6 p-8 rounded-2xl"
            style={{ 
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)'
            }}
          >
            <h3 
              className="text-xl"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)'
              }}
            >
              Follow Me
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl no-underline transition-all"
                  style={{ 
                    backgroundColor: 'var(--color-bg-tertiary)',
                    color: 'var(--color-text-primary)'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span 
                      className="w-10 h-10 flex items-center justify-center rounded-full text-sm"
                      style={{ 
                        backgroundColor: 'var(--color-accent-secondary)',
                        color: '#fff'
                      }}
                    >
                      {social.abbr}
                    </span>
                    <span>{social.name}</span>
                  </div>
                  <span style={{ color: 'var(--color-accent)' }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
