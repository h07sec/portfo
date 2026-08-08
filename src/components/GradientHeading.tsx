import { useEffect, useRef, useState, type ElementType, type ReactNode, type CSSProperties } from 'react';

interface GradientHeadingProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

/**
 * Renders gradient/clipped text (.hero-heading) with a scroll-triggered
 * fade-in that uses ONLY opacity — no transform, on this element or any
 * wrapper. Some mobile WebKit builds fail to paint -webkit-background-clip:
 * text when a CSS transform is present anywhere in the render path (self
 * or ancestor), which silently makes the text invisible. Using a plain
 * IntersectionObserver + opacity transition sidesteps that entirely.
 */
export default function GradientHeading({
  children,
  as: Tag = 'h2',
  className = '',
  style,
  delay = 0,
}: GradientHeadingProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`hero-heading ${className}`}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}
