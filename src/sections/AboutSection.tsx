import GradientHeading from '../components/GradientHeading';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ABOUT_LINES = [
  'Technology has always been more than a career to me',
  "it's what I genuinely enjoy building, breaking,",
  'and understanding. I work across web development',
  'and cybersecurity, combining creativity with a',
  'security-first mindset to build modern,reliable applications.',
  "When I'm not developing, you'll usually find me",
  'exploring cybersecurity, researching vulnerabilities,',
  'experimenting with new technologies, or sharpening my skills.',
  "I'm always learning, always building,",
  'and always looking for the next challenge.',
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      <div className="flex flex-col items-center text-center gap-8 sm:gap-10 md:gap-12">
        <GradientHeading
          as="h2"
          delay={0}
          className="font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(1.5rem, 5vw, 64px)' }}
        >
          About me
        </GradientHeading>

        <AnimatedText
          lines={ABOUT_LINES}
          containerClassName="flex flex-col items-center gap-1 sm:gap-1.5"
          className="text-[#D7E2EA] font-medium text-center leading-snug"
          style={{
            fontSize: 'clamp(0.7rem, 1.3vw, 1rem)',
            whiteSpace: 'nowrap',
            wordBreak: 'keep-all',
            overflowWrap: 'normal',
          }}
        />

        <ContactButton />
      </div>
    </section>
  );
}
