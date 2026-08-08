import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GradientHeading from '../components/GradientHeading';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  number: string;
  name: string;
  category: 'Website' | 'Security Tool';
  description: string;
  url: string;
  buttonLabel: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Berseri Spa',
    category: 'Website',
    description:
      'A responsive spa business website built to showcase services and make booking information easy to find.',
    url: 'https://berserispa.gt.tc/?i=1',
    buttonLabel: 'Visit Site',
  },
  {
    number: '02',
    name: 'Arihant Computers',
    category: 'Website',
    description:
      'A business website for a computer sales and services store, designed for clarity and easy navigation.',
    url: 'https://arihantcomputers.gt.tc/?i=1',
    buttonLabel: 'Visit Site',
  },
  {
    number: '03',
    name: 'Headless ESP32 Marauder',
    category: 'Security Tool',
    description:
      'A headless build of ESP32 Marauder for the ESP32 DevKit V1, set up for Wi-Fi and Bluetooth security testing without a display.',
    url: 'https://github.com/h07sec/Headless-ESP32-Marauder-for-ESP32-DevKit-V1',
    buttonLabel: 'View on GitHub',
  },
];

interface CardProps {
  project: Project;
  index: number;
  total: number;
}

function ProjectCard({ project, index, total }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32"
      style={{ top: `${6 + index * 28}px` }}
    >
      <motion.div
        style={{ scale, transformOrigin: 'top center' }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-8 sm:p-10 md:p-14 min-h-[320px] sm:min-h-[360px] flex flex-col justify-between gap-8"
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.url} label={project.buttonLabel} />
        </div>

        {/* Description */}
        <p
          className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-2xl"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
        >
          {project.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
    >
      <GradientHeading
        as="h2"
        delay={0}
        className="font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </GradientHeading>

      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
