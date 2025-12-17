'use client';

const contactDetails = [
  { label: 'EMAIL', value: 'aniezeoformic@gmail.com', link: 'mailto:aniezeoformic@gmail.com' },
  { label: 'PHONE', value: '+234 814 257 2488', link: 'tel:+2348142572488' },
];

const socialLinks = [
  { name: 'GITHUB', url: 'https://github.com/codad5', handle: '@codad5' },
  { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/chibueze-michael', handle: '/chibueze-michael' },
  { name: 'TWITTER', url: 'https://twitter.com/codad5_', handle: '@codad5_' },
];

export default function Contact() {
  return (
    <section 
      id="contact"
      className="w-full py-12 px-6"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 pb-6">
          <span 
            className="font-mono text-sm"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
          >
            05.
          </span>
          <h2 
            className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-widest"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            CONTACT_INFO
          </h2>
          <div 
            className="flex-1"
            style={{ 
              borderBottom: '2px dashed var(--color-border)'
            }}
          />
        </div>

        {/* Contact Form Style */}
        <div 
          className="p-8 border-2"
          style={{ 
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-bg-secondary)'
          }}
        >
          {/* Header */}
          <div 
            className="pb-4 mb-6 border-b-2"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <p 
              className="font-mono text-sm uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)' }}
            >
              TRANSMISSION FORM
            </p>
            <p 
              className="font-mono text-xs pt-1"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
            >
              Available for opportunities, freelance, and collaborations
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Direct Contact */}
            <div className="space-y-4">
              <h3 
                className="font-mono text-sm uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)' }}
              >
                [DIRECT]
              </h3>
              {contactDetails.map((contact) => (
                <div key={contact.label} className="flex flex-col gap-1">
                  <span 
                    className="font-mono text-xs"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
                  >
                    {contact.label}:
                  </span>
                  <a
                    href={contact.link}
                    className="font-mono text-sm no-underline hover:underline"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 
                className="font-mono text-sm uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)' }}
              >
                [NETWORKS]
              </h3>
              {socialLinks.map((social) => (
                <div key={social.name} className="flex items-center gap-2">
                  <span 
                    className="font-mono text-xs w-24"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
                  >
                    {social.name}:
                  </span>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm no-underline hover:underline"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
                  >
                    {social.handle}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
