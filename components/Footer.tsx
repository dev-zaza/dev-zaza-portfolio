import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = 2026;

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/dev-zaza',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:zazabanggamer@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
    },
  ];

  return (
    <footer className="bg-black/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} ZaZa. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

