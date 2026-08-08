import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Cybersecurity',
    description:
      'Working knowledge of networking fundamentals, TCP/IP, HTTP/HTTPS, and DNS, with familiarity in the OWASP Top 10, Burp Suite, Nmap, and basic vulnerability assessment.',
  },
  {
    number: '02',
    name: 'Web Development',
    description:
      'Building responsive, modern web applications with HTML5, CSS3, and JavaScript (ES6+), with hands-on experience in React.js and Node.js.',
  },
  {
    number: '03',
    name: 'Tools & Technologies',
    description:
      'Comfortable working with Git and GitHub for version control, Visual Studio Code as a daily driver, and basic Linux for development and testing.',
  },
  {
    number: '04',
    name: 'AI-Assisted Development',
    description:
      'Using AI-assisted development workflows to rapidly prototype, learn new technologies, and ship projects faster without cutting corners.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={24}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
