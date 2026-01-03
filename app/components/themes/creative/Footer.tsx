'use client';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/codad5' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chibueze-michael' },
  { name: 'Twitter', url: 'https://twitter.com/codad5_' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="w-full px-6 lg:px-12 py-8"
      style={{ 
        backgroundColor: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--color-border)'
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="flex items-center gap-4">
          <span 
            className="text-xl font-bold italic"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-accent-blue)'
            }}
          >
            Codad5
          </span>
          <span 
            className="text-sm"
            style={{ color: 'var(--color-text-muted)' }}
          >
            © {currentYear} Chibueze Aniezeofor
          </span>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm no-underline transition-all"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
