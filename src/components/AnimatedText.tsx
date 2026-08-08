import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  lines: string[];
  className?: string;
  style?: React.CSSProperties;
  containerClassName?: string;
}

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Word({ word, index, total, progress }: WordProps) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* invisible placeholder preserves layout / line-wrapping */}
      <span style={{ visibility: 'hidden' }}>{word}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {word}
      </motion.span>
    </span>
  );
}

/**
 * Reveals a block of text word by word, line by line, in strict
 * reading order, driven by a single shared scroll progress. Each
 * line only starts revealing once the previous line has finished,
 * because word indices are numbered continuously across all lines
 * rather than reset per line.
 */
export default function AnimatedText({ lines, className, style, containerClassName }: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const linesOfWords = lines.map((line) => line.split(' '));
  const totalWords = linesOfWords.reduce((sum, words) => sum + words.length, 0);

  let runningIndex = 0;

  return (
    <div ref={containerRef} className={containerClassName}>
      {linesOfWords.map((words, lineIndex) => {
        const lineStartIndex = runningIndex;
        runningIndex += words.length;

        return (
          <p key={lineIndex} className={className} style={style}>
            {words.map((word, wordIndex) => (
              <span key={`${word}-${wordIndex}`}>
                <Word
                  word={word}
                  index={lineStartIndex + wordIndex}
                  total={totalWords}
                  progress={scrollYProgress}
                />
                {wordIndex < words.length - 1 ? '\u00A0' : null}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
